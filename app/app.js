
var express = require('express');
var reload = require('reload');
var dataFile = require('./data/data.json');
var app = express();

app.use(require('./routes/index'));
app.use(require('./routes/speaker'));

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('appData', dataFile);


//public folder
app.use(express.static('app/public'));

var server = app.listen(1860, function(){
    console.log('Example app listening on port ');
});

reload(server, app);







