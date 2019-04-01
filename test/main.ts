import * as timerdaemon from "../index";
import * as chai from "chai";

let expect = chai.expect;

let valpre = 0
let valpost = 0

describe("timerdaemon", () => {
  describe("pre", function () {
    it("after 3.1 seconds pre function was executed 4 times", function (done) {
      timerdaemon.preSync(() => {
        valpre = valpre + 1
      }, 1000);
      setTimeout(function () {
        expect(valpre).to.be.deep.equal(4);
        return done()
      }, 3100)
    });
  });

  describe("post", () => {
    it("after 2.9 seconds post function was executed 2 times", function (done) {
      timerdaemon.postSync(() => {
        valpost = valpost + 1
      }, 1000);
      setTimeout(function () {
        expect(valpost).to.be.deep.equal(2);
        return done()
      }, 2900)
    });
  });

});