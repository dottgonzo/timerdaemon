var timerdaemon=require('../index.js');
var verb=require('verbo');
timerdaemon.pre(5555,function(){verb("completed after 5555","verbose","1test")});
timerdaemon.post(5555,function(){verb("completed after 5555","debug","1test")});
