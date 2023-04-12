import adapter from '@sveltejs/adapter-vercel';

export default {
	runtime: 'nodejs18.x',
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			})
	}
};
