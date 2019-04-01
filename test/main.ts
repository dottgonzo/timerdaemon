import { expect } from 'chai'

import * as timerdaemon from '../index'

describe('timerdaemon', () => {
  describe('pre Sync', () => {
    it('after 9.1 seconds pre function was executed 10 times', (done) => {
      let valpre = 0
      timerdaemon.preSync(() => {
        valpre++
      }, 1000)
      setTimeout(() => {
        expect(valpre).to.be.deep.equal(10)
        done()
      }, 9100)
    })
  })

  describe('post Sync', () => {
    it('after 9.9 seconds post function was executed 8 times', (done) => {
      let valpost = 0
      timerdaemon.postSync(() => {
        valpost++
      }, 1000)
      setTimeout(() => {
        expect(valpost).to.be.deep.equal(9)
        done()
      }, 9900)
    })
  })

  describe('pre Async', () => {
    it('after 9.1 seconds post function was executed 10 times', (done) => {
      let valpre = 0
      const test = async () => {
        valpre++
      }
      timerdaemon.pre(test, 1000)
      setTimeout(() => {
        expect(valpre).to.be.deep.equal(10)
        done()
      }, 9100)
    })
  })

  describe('post Async', () => {
    it('after 3.9 seconds post function was executed 8 times', (done) => {
      let valpost = 0
      const test = async () => {
        valpost++
      }
      timerdaemon.post(test, 1000)
      setTimeout(() => {
        expect(valpost).to.be.deep.equal(9)
        done()
      }, 9900)
    })
  })

})