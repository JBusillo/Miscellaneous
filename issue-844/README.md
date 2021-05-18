# Proposed solution for Issue 844

Issue:      [https://github.com/sveltejs/kit/issues/844](https://github.com/sveltejs/kit/issues/844)

My original comment: [https://github.com/sveltejs/kit/issues/844#issuecomment-841610497](https://github.com/sveltejs/kit/issues/844#issuecomment-841610497)

## Improved Proposal

Only one module needs to be changed: `kit/src/core/dev/index.js`.  [Modified Source Code](./kit-packages-kit-src-core-dev-index.js)

The method of attack is:

- Move the get_server function before calling `vite.createServer`.  At this point, any http(s) requests will result in a 204 (No Content), due to the initial state of the viteHandler.  By moving this code up, the inlineConfig object has access to `this.server`.
```javascript
	/** @type {?(req: any, res: any) => void} */
	let viteHandler = (res, req) => {
		res.statusCode = 204;
		res.end();
	};

	this.server = await get_server(this.port, this.host, this.https, (req, res) => {
		viteHandler(req, res);
	});

```
-  Change the configuration setup to check if https should be used.  If it is, set the HMR port to the dev server's port, and the server to the dev server.  This is needed because a secure websocket (wss) with a self-signed certificate will always fail unless it is validated through https on a displayable page.  By 'piggy-backing' onto the application server, when the user approves using the unsigned certificate, future https and wss requests will be authorized.

```javascript
    server: {
		...user_config.server,
		middlewareMode: true,
		hmr: {
			...user_config.server?.hmr,
			...(this.https ? {server: this.server, port: this.port} : {})
			}
		},
```
- Update the viteHandler with the middlewares handler.  
```javascript
    viteHandler = (req, res) =>
	    this.vite.middlewares(req, res, async () => {
        ...
        }
```        

## My questions

This is just a suggestion.  I don't have experience with Github (pull, push, branches), and, luckily, I don't have the required access to mess things up.

And, being new to open source, I'm unfamiliar with the procedures, politics, etc.  This is why I've put this README.md outside of the issue's comments.  I welcome suggestions on whether this is the proper method to suggest changes, or if the 'powers-that-be' prefer coming up with their own solutions and writing their own code.  So, my apologies if I have offended anyone or if you consider this to be intrusive.

Feel free to contact me via email (jbusillo@yahoo.com) with the appropriate tongue-lashings, if necessary.

Thank you.
