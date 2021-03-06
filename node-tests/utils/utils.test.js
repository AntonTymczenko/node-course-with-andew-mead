const utils = require('./utils'),
    expect  = require('expect')

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      expect(utils.add(33, 11)).toBe(44).toBeA('number')
    })
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number')
        done()
      })
    })
  })

  describe('#square', () => {
    it('should square a number', () => {
      expect(utils.square(3)).toBe(9).toBeA('number')
    })

    it('should async square a number', (done) => {
      utils.asyncSquare(3, (square) => {
        expect(square).toBe(9)
        done()
      })
    })
  })
})

it('should expect some values', () => {
  // expect(12).toNotBe(11)
  // expect({name: 'Andrew'}).toNotEqual({name: 'Andrew'})
  // expect([2,3,4]).toExclude(1)
  expect({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }).toExclude({
    age: 23
  })
})

//should verify first and last names are set

it('should have first and last names set', () => {
  let user = {}
  expect(utils.setName(user, 'Anton Tymczenko'))
    .toBeA('object')
    .toInclude({firstName: 'Anton'})
    .toInclude({lastName: 'Tymczenko'})
})
