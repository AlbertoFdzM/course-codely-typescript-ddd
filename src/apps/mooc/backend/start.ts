import { MoocBackendApp } from './MoocBackendApp';

void (async () => {
	try {
		await new MoocBackendApp().start();
	} catch (e) {
		console.error(e);
		process.exit(1);
	}

	process.on('uncaughtException', err => {
		console.error('uncaughtException', err);
		process.exit(1);
	});
})();
