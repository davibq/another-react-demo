
require('node-jsx').install({ extension: '.js', harmony: true });

var express = require('express'),
  app = express(),
  path = require('path'),
  react = require('react'),
  Application = react.createFactory(require(path.join(__dirname, '../shared/Components/main-app')));

app.set('views', path.join(__dirname, 'tpls'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '/../public')));


app.get('/', (req, res) => {
	var applicationHtml = react.renderToString(Application());
	res.render('main.ejs', {
		reactOutput: applicationHtml
	});
});

app.listen(3000, () => {
	console.log('Listening at 3000');
});
