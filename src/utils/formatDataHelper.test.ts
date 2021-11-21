import { DEADLINE } from "./constant";
import { orderData, getTimeDifference, filterData } from "./formatDataHelper";
import { data_1, data_2, data_3, data_4, data_5 } from "./fakeData";

const difference = Math.abs(DEADLINE);

describe("orderData", () => {
  it("Should order the races", () => {
    expect(orderData([data_1, data_2])).toStrictEqual(data_3);
  });
});

describe("getTimeDifference", () => {
  it("Should get race start time and current time difference", () => {
    expect(
      getTimeDifference(
        data_1.advertised_start.seconds,
        data_2.advertised_start.seconds
      )
    ).toBe(difference * 2);
  });
});

describe("filterData", () => {
  it("Should return all data if no filter", () => {
    expect(filterData(data_4, [])).toStrictEqual(data_4);
  });

  it("Should return all filtered race data if filter is set", () => {
    expect(
      filterData(data_4, ["161d9be2-e909-4326-8c2c-35ed71fb460b"])
    ).toStrictEqual(data_5);
  });
});
