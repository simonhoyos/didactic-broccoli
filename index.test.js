const { sum } = require('.')

describe('math', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(4,3)).toBe(7)
  })

  it('should substract two numbers correctly', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(4,3)).toBe(7)
  })
})
