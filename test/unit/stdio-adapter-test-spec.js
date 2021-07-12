'use strict'

const chai = require('chai')
const expect = chai.expect
const adapter = require('../../src/adapters/stdio/schedule');

describe('A test for STDIO adapter', function () {
  it('should return a valid schedule request given a raw string input for 3 weekdays', function () {
    const inputMock = "Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)";
    const response = adapter(inputMock);
    const expectedSchedule = {
        clientType: 'regular',        
        numberOfWeekends: 0,
        numberOfWeekdays: 3,
    };

    expect(JSON.stringify(response)).to.equal(JSON.stringify(expectedSchedule));
  })

  it('should return a valid schedule request given a raw string input for 2 weekends days and one weekday', function () {
    const inputMock = "Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)";    
    const response = adapter(inputMock);
    const expectedSchedule = {
        clientType: 'regular',        
        numberOfWeekends: 2,
        numberOfWeekdays: 1,
    };

    expect(JSON.stringify(response)).to.equal(JSON.stringify(expectedSchedule));
  })

  it('should return a valid schedule request given a raw string input for 2 wekkdays and one weekend day', function () {
    const inputMock = "Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)";
    const response = adapter(inputMock);
    const expectedSchedule = {
        clientType: 'fidelidade',        
        numberOfWeekends: 1,
        numberOfWeekdays: 2,
    };

    expect(JSON.stringify(response)).to.equal(JSON.stringify(expectedSchedule));
  })
})