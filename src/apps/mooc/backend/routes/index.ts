import { Router } from 'express';
import { glob } from 'glob';

export function registerRoutes(router: Router): void {
	const routePaths = glob.sync(`${__dirname}/**/*.route.*`);
	routePaths.forEach(routePath => {
		register(routePath, router);
	});
}

function register(routePath: string, router: Router) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
	const route = require(routePath) as { register: (router: Router) => void };
	route.register(router);
}
