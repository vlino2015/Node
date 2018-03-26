
var express = require('express');
var reload = require('reload');
var dataFile = require('./data/data.json');
var app = express();

app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./routes/index'));
app.use(require('./routes/speaker'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));



//public folder
app.use(express.static('app/public'));

var server = app.listen(2001, function(){
    console.log('Example app listening on port 2001 ');
});

reload(server, app);







