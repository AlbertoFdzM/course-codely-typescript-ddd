import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
	let repository: FileCourseRepository;

	beforeAll(() => {
		repository = new FileCourseRepository();
	});

	describe('.find() method', () => {
		let expectedCourse: Course;

		beforeAll(async () => {
			expectedCourse = new Course({
				id: 'id',
				name: 'name',
				duration: 'duration'
			});

			await repository.save(expectedCourse);
		});

		it('should return a course', async () => {
			const course = await repository.find(expectedCourse.id);

			expect(course).toStrictEqual(expectedCourse);
		});
	});

	describe('.save() method', () => {
		it('should save a course', async () => {
			const expectedCourse = new Course({
				id: 'id',
				name: 'name',
				duration: 'duration'
			});

			await repository.save(expectedCourse);

			const course: Course = await repository.find('id');

			expect(course).toStrictEqual(expectedCourse);
		});
	});
});
