
/* CONSTANTS */
var BASE_URL = 'api.parse.com';

var https = require('https'),  // Browserify already has a wrapper to use http in browsers
	baseOptions = {
		host: BASE_URL,
		path: '/1/classes/Links',
		withCredentials: false,
		headers: {
			'X-Parse-Application-Id': 'kQ0Iv7RTOKVaPLGNHM0jq3wH2BVOZsd1Pn9SDG2M',
			'X-Parse-REST-API-Key': 'w9PR6DmFcL696UBCofIJXYnS9C3pWbCzD3eBW2l9'
		}
	};

var getLinks = (cb) => {
	var request = https.request(baseOptions, (response) => {
		var finalResponse = '';
		response.on('data', (chunk) => {
			finalResponse += chunk;
		});

		response.on('end', () => {
			cb(JSON.parse(finalResponse));
		});
	});
	request.end();
};

module.exports = {
	getLinks: getLinks
};
