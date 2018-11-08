import Raven from 'raven-js';

function init() {
	Raven.config('https://7b70e0f6195047d99975c415a39efd11@sentry.io/1309335', {
		release: '1-0-0',
		environment: 'development-test',
	}).install();
}

function log(error) {
	Raven.captureException(error);
}

export default {
	init,
	log,
};
