let timerdaemon = {
  pre: function(time:number,callback:Function) {
    callback();
    setTimeout(function () {
      timerdaemon.pre(time,callback);
    }, time);
  },
  post: function(time:number,callback:Function) {
    setTimeout(function () {
      callback();
      timerdaemon.post(time,callback);
    }, time);
  }
};
export=timerdaemon
