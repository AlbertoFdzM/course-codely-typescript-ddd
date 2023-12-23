import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
	let expectedCourse: Course;
	let repository: CourseRepositoryMock;
	let creator: CourseCreator;

	beforeAll(() => {
		expectedCourse = new Course({
			id: 'some-id',
			name: 'some-name',
			duration: 'some-duration'
		});
		repository = new CourseRepositoryMock(expectedCourse);
		creator = new CourseCreator(repository);
	});

	it('should create a valid course', async () => {
		const course = new Course(expectedCourse);

		await creator.run(course.id, course.name, course.duration);

		repository.assertLastSavedCourseIs(course);
	});
});
