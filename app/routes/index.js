var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var data = req.app.get('appData');

    var pagePhotos = [];

    data.speakers.forEach(function(item) {
        pagePhotos = pagePhotos.concat(item.artwork);
        
    });
    
    res.render('index', {
        pageTitle: 'Here is my variable',
        pageID: 'Veronica',
        artwork: pagePhotos
    });
});

module.exports = router;