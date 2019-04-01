Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const timerdaemon = require("../index");
describe('timerdaemon', () => {
    describe('pre', () => {
        it('after 3.1 seconds pre function was executed 4 times', (done) => {
            let valpre = 0;
            timerdaemon.preSync(() => {
                valpre = valpre + 1;
            }, 1000);
            setTimeout(() => {
                chai_1.expect(valpre).to.be.deep.equal(4);
                done();
            }, 3100);
        });
    });
    describe('post', () => {
        it('after 2.9 seconds post function was executed 2 times', (done) => {
            let valpost = 0;
            timerdaemon.postSync(() => {
                valpost = valpost + 1;
            }, 1000);
            setTimeout(() => {
                chai_1.expect(valpost).to.be.deep.equal(2);
                done();
            }, 2900);
        });
    });
});
//# sourceMappingURL=main.js.map