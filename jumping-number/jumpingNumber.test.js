const {jumpingNumber} = require('./jumpingNumber');

describe('Jumping Number',() => {
  it('Scenario 1:Given a single digit number 8 when I check its digits then the result should be Jumping!!',() => {
    expect(jumpingNumber(8)).toEqual('Jumping!!');
  });

  it('Scenario 2:Given a number 0 when I check its digits then the result should be Jumping!!',() => {
    expect(jumpingNumber(0)).toEqual('Jumping!!');
  })
})