
var React = require('react'),
	path = require('path');
	parseAccess = require('../../shared/services/parse-access');

module.exports = (app) => {

	app.get('/', (req, res) => {
		parseAccess.getLinks((response) => {
			var appComponent = require(path.join(__dirname, '../../shared/Components/main-app')),
				Application = React.createFactory(appComponent);
			var	applicationHtml = React.renderToString(Application(
					{
						data: response
					}
				));
			res.render('main.ejs', {
				reactOutput: applicationHtml,
				jsObjs: `var obj = ${JSON.stringify(response.results)}`
			});	
		});
	});

}


// http://stackoverflow.com/questions/20978946/facebook-react-js-how-do-you-render-statefull-components-on-the-server