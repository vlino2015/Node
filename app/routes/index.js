var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {
        pageTitle: 'Here is my variable',
        pageID: 'Veronica'
    });
});

module.exports = router;