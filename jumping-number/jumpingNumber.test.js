const {jumpingNumber} = require('./jumpingNumber');

describe('Jumping Number',() => {
  it('Scenario 1:Given a single digit number 8 when I check its digits then the result should be Jumping!!',() => {
    expect(jumpingNumber(8)).toEqual('Jumping!!');
  });

  it('Scenario 2:Given a number 0 when I check its digits then the result should be Jumping!!',() => {
    expect(jumpingNumber(0)).toEqual('Jumping!!');
  });

  it('Scenario 3:Given a number 11 when I check its digits then the result should be Not!!',() => {
    expect(jumpingNumber(11)).toEqual('Not!!');
  });

  it('Scenario 4:Given a number 12 when I check its digits then the result should be Jumping!!',() => {
    expect(jumpingNumber(12)).toEqual('Jumping!!');
  });

  it('Scenario 5:Given a number 21 when I check its digits then the result should be Jumping!!',() => {
    expect(jumpingNumber(21)).toEqual('Jumping!!');
  });
})