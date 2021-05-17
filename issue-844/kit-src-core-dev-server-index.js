import http from 'http';
import https from 'https';

/** @type {?(req: http.IncomingMessage, res: http.ServerResponse) => void} */
let viteHandler;

/**
@param {http.IncomingMessage} req
@param {http.ServerResponse} res
*/
const serverHandler = (req, res) => {
	if (viteHandler) {
		viteHandler(req, res);
	} else {
		res.statusCode = 204;
		res.end();
	}
};

/**
@param {(req: http.IncomingMessage, res: http.ServerResponse) => void} handler
*/
export function set_handler(handler) {
	viteHandler = handler;
}

/**
 *
 * @param {number} port
 * @param {string} host
 * @param {boolean} use_https
 * @returns {Promise<http.Server | https.Server>}
 */
export async function get_server(port, host, use_https) {
	/** @type {https.ServerOptions} */
	const https_options = {};

	if (use_https) {
		https_options.key = https_options.cert = (await import('./cert.js')).createCertificate();
	}

	return new Promise((fulfil) => {
		const server = use_https
			? https.createServer(/** @type {https.ServerOptions} */(https_options), serverHandler)
			: http.createServer(serverHandler);

		server.listen(port, host || '0.0.0.0', () => {
			fulfil(server);
		});
	});
}


