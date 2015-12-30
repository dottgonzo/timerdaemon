var timerdaemon=require('../index.js');

var val1=1000
var val2=2000
timerdaemon.pre(5555,function(){
    console.log("completed pre after 5555",val1)
    val1=val1+1
    });
timerdaemon.post(5555,function(){
    console.log("completed post after 5555",val2)
        val2=val2+1
    });
