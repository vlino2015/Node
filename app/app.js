
var express = require('express');
var reload = require('reload');
var dataFile = require('./data/data.json');
var app = express();
var io = require('socket.io')();

app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

//blobal variables
app.locals.siteTitle = 'Digtal Crafts Meet-Up';
app.locals.allSpeakers = dataFile.speakers;

app.use(require('./routes/index'));
app.use(require('./routes/speaker'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));



//public folder
app.use(express.static('app/public'));

var server = app.listen(2001, function(){
    console.log('Example app listening on port 2001 ');
});

io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});

reload(server, app);







