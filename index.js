var timerdaemon = {
  pre: function(time,callback) {
    callback();
    setTimeout(function () {
      timerdaemon.pre(time,callback);
    }, time);
  },
  post: function(time,callback) {
    setTimeout(function () {
      callback();
      timerdaemon.post(time,callback);
    }, time);
  }
};
module.exports=timerdaemon
