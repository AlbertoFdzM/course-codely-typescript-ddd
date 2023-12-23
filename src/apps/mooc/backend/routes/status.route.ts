import { Request, Response, Router } from 'express';

import { Controller } from '../controllers/Controller';
import { container } from '../dependency-injection/index';

export const register = (router: Router): void => {
	const controller = container.get<Controller>('Apps.mooc.controllers.StatusGetController');

	router.get('/status', (req: Request, res: Response) => {
		void controller.run(req, res);
	});
};
