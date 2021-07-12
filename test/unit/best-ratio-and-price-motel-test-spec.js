"use strict";

const chai = require("chai");
const expect = chai.expect;

const motels = require("../../src/infrastructure/db/db.json").motel;
const useCaseFactory = require("../../src/core/use-cases/getBestRationAndPriceMotel");

const useCase = useCaseFactory(motels);

describe("A test for obtaining the best ratio and cheapest motel", function () {
  it("should return the best ratio and cheapest motel Parque das Flores", function () {

    const schedule = {
      clientType: "regular",
      numberOfWeekends: 0,
      numberOfWeekdays: 3,
    };

    const response = useCase.cheapestMotel(schedule);
    
    const expectedResponse = "Parque das flores";

    expect(response).to.be.equals(expectedResponse);

  });

  it("should return the best ratio and cheapest motel Jardim Botânico", function () {

    const schedule = {
      clientType: "regular",
      numberOfWeekends: 2,
      numberOfWeekdays: 1,
    };

    const response = useCase.cheapestMotel(schedule);
    
    const expectedResponse = "Jardim Botânico";

    expect(response).to.be.equals(expectedResponse);

  });

  it("should return the best ratio and cheapest motel Mar Atlântico", function () {

    const schedule = {
      clientType: "fidelidade",
      numberOfWeekends: 1,
      numberOfWeekdays: 2,
    };

    const response = useCase.cheapestMotel(schedule);
    
    const expectedResponse = "Mar Atlântico";

    expect(response).to.be.equals(expectedResponse);

  });
  
});

















