Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const timerdaemon = require("../index");
describe('async', () => {
    describe('pre Async', () => {
        it('after 8.5 seconds post function was executed 3 times', (done) => {
            let valpre = 0;
            const test = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        valpre++;
                        resolve();
                    }, 2000);
                });
            };
            timerdaemon.pre(test, 1000);
            setTimeout(() => {
                chai_1.expect(valpre).to.be.deep.equal(3);
                done();
            }, 8500);
        });
    });
    describe('post Async', () => {
        it('after 8.5 seconds post function was executed 2 times', (done) => {
            let valpost = 0;
            const test = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        valpost++;
                        resolve();
                    }, 2000);
                });
            };
            timerdaemon.post(test, 1000);
            setTimeout(() => {
                chai_1.expect(valpost).to.be.deep.equal(2);
                done();
            }, 8500);
        });
    });
});
//# sourceMappingURL=async.js.map