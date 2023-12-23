import { Request, Response, Router } from 'express';

import { Controller } from '../controllers/Controller';
import { container } from '../dependency-injection/index';

export const register = (router: Router): void => {
	const coursePutController = container.get<Controller>(
		'Apps.mooc.controllers.CoursePutController'
	);

	router.put('/courses/:id', (req: Request, res: Response) => {
		void coursePutController.run(req, res);
	});
};
