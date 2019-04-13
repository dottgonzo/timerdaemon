import { expect } from 'chai'

import * as timerdaemon from '../index'

describe('sync', () => {
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


})