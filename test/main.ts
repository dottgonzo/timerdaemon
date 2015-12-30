import * as timerdaemon from "../index";
import * as chai from "chai";

let expect = chai.expect;

let valpre = 0
let valpost = 0


timerdaemon.pre(1000, function() {
    valpre = valpre + 1
});
timerdaemon.post(1000, function() {
    valpost = valpost + 1
});


describe("timerdaemon", function() {
    this.timeout(50000);
    
    describe("pre", function() {
        it("after 5 seconds pre function was executed 6 times", function(done) {
            setTimeout(function() {
                expect(valpre).to.be.deep.equal(6);
                done()
            }, 5100)
        });
    });

    describe("post", function() {
        it("after 10 seconds post function was executed 10 times", function(done) {
            setTimeout(function() {
                expect(valpost).to.be.deep.equal(10);
                done()
            }, 5000)
        });
    });

});