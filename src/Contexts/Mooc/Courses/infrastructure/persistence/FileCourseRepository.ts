import fs from 'node:fs';
import path from 'node:path';

import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';
import { BSON } from 'bson';

export class FileCourseRepository implements CourseRepository {
	private readonly FILE_PATH = path.join(__dirname, '/courses');

	public async find(id: string): Promise<Course> {
		const courseData = await fs.promises.readFile(this.filePath(id));

		const course = new Course(BSON.deserialize(courseData) as { id: string; name: string; duration: string });

		return course;
	}

	public async save(course: Course): Promise<void> {
		await fs.promises.writeFile(this.filePath(course.id), BSON.serialize(course));
	}

	private filePath(id: string): string {
		return `${this.FILE_PATH}.${id}.repo`;
	}
}
