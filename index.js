var timerdaemon = {
    pre: function (time, callback) {
        callback();
        setTimeout(function () {
            timerdaemon.pre(time, callback);
        }, time);
    },
    post: function (time, callback) {
        setTimeout(function () {
            callback();
            timerdaemon.post(time, callback);
        }, time);
    }
};
module.exports = timerdaemon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksV0FBVyxHQUFHO0lBQ2hCLEdBQUcsRUFBRSxVQUFTLElBQVcsRUFBQyxRQUFpQjtRQUN6QyxRQUFRLEVBQUUsQ0FBQztRQUNYLFVBQVUsQ0FBQztZQUNULFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxJQUFJLEVBQUUsVUFBUyxJQUFXLEVBQUMsUUFBaUI7UUFDMUMsVUFBVSxDQUFDO1lBQ1QsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0NBQ0YsQ0FBQztBQUNGLGlCQUFPLFdBQVcsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0aW1lcmRhZW1vbiA9IHtcbiAgcHJlOiBmdW5jdGlvbih0aW1lOm51bWJlcixjYWxsYmFjazpGdW5jdGlvbikge1xuICAgIGNhbGxiYWNrKCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lcmRhZW1vbi5wcmUodGltZSxjYWxsYmFjayk7XG4gICAgfSwgdGltZSk7XG4gIH0sXG4gIHBvc3Q6IGZ1bmN0aW9uKHRpbWU6bnVtYmVyLGNhbGxiYWNrOkZ1bmN0aW9uKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgdGltZXJkYWVtb24ucG9zdCh0aW1lLGNhbGxiYWNrKTtcbiAgICB9LCB0aW1lKTtcbiAgfVxufTtcbmV4cG9ydD10aW1lcmRhZW1vblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
