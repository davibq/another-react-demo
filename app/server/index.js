
require('node-jsx').install({ extension: '.js', harmony: true });

var express = require('express'),
  app = express(),
  path = require('path');

app.set('views', path.join(__dirname, '../tpls/'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '/../public')));

require(path.join(__dirname, 'routes/main-routes.js'))(app);

app.listen(3000, () => {
	console.log('Listening at 3000');
});
