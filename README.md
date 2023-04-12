How to build and deploy to Heroku
=================================

```bash
$ npm create svelte@latest hello
$ cd hello
$ npm install
$ npm install -D @sveltejs/adapter-node
$ npm install -D @sveltejs/adapter-vercel
$ npm run dev
```

Change `package.json` to:

```json
{
	"name": "@jdeighan/hello",
	"version": "1.0.0",
	"type": "module",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "^1.0.0-next.90",
		"@sveltejs/adapter-node": "^1.2.3",
		"@sveltejs/adapter-vercel": "^2.4.1",
		"@sveltejs/kit": "^1.0.0-next.587",
		"svelte": "^3.54.0",
		"vite": "^4.0.0"
	}
}
```

Change `src/routes/+page.svelte` to:

```svelte
<h1>Hello</h1>
```

In `svelte.config.js`, change:
```js
import adapter from '@sveltejs/adapter-auto';
```
to:
```js
import adapter from '@sveltejs/adapter-vercel';
```









Heroku Deployment
-----------------

Install Heroku CLI and execute:
```bash
$ heroku login
$ heroku create jd-hello
$ git init
$ git branch -M main
$ git add -A
$ git commit -m "initial commit"

```
