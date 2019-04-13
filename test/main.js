var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const timerdaemon = require("../index");
describe('timerdaemon', () => {
    describe('pre Sync', () => {
        it('after 9.1 seconds pre function was executed 10 times', (done) => {
            let valpre = 0;
            timerdaemon.preSync(() => {
                valpre++;
            }, 1000);
            setTimeout(() => {
                chai_1.expect(valpre).to.be.deep.equal(10);
                done();
            }, 9100);
        });
    });
    describe('post Sync', () => {
        it('after 9.9 seconds post function was executed 8 times', (done) => {
            let valpost = 0;
            timerdaemon.postSync(() => {
                valpost++;
            }, 1000);
            setTimeout(() => {
                chai_1.expect(valpost).to.be.deep.equal(9);
                done();
            }, 9900);
        });
    });
    describe('pre Async', () => {
        it('after 9.1 seconds post function was executed 10 times', (done) => {
            let valpre = 0;
            const test = () => __awaiter(this, void 0, void 0, function* () {
                valpre++;
            });
            timerdaemon.pre(test, 1000);
            setTimeout(() => {
                chai_1.expect(valpre).to.be.deep.equal(10);
                done();
            }, 9100);
        });
    });
    describe('post Async', () => {
        it('after 9.9 seconds post function was executed 9 times', (done) => {
            let valpost = 0;
            const test = () => __awaiter(this, void 0, void 0, function* () {
                valpost++;
            });
            timerdaemon.post(test, 1000);
            setTimeout(() => {
                chai_1.expect(valpost).to.be.deep.equal(9);
                done();
            }, 9900);
        });
    });
});
//# sourceMappingURL=main.js.map