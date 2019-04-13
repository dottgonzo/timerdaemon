Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const timerdaemon = require("../index");
describe('async', () => {
    describe('pre Async', () => {
        it('after 9.1 seconds post function was executed 10 times', (done) => {
            let valpre = 0;
            const test = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('pre' + valpre);
                        valpre++;
                        resolve();
                    }, 2000);
                });
            };
            timerdaemon.pre(test, 1000);
            setTimeout(() => {
                chai_1.expect(valpre).to.be.deep.equal(3);
                done();
            }, 9100);
        });
    });
    describe('post Async', () => {
        it('after 9.9 seconds post function was executed 9 times', (done) => {
            let valpost = 0;
            const test = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('post' + valpost);
                        valpost++;
                        resolve();
                    }, 2000);
                });
            };
            timerdaemon.post(test, 1000);
            setTimeout(() => {
                chai_1.expect(valpost).to.be.deep.equal(3);
                done();
            }, 9900);
        });
    });
});
//# sourceMappingURL=async.js.map