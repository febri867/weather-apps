import { mapWeatherToDomain } from "./weather.mapper";

describe("mapWeatherToDomain", () => {
  it("should map dto into domain model", () => {
    const location = {
      lat: "-6.17",
      lon: "106.82",
      display_name: "Jakarta",
    };

    const weatherDto = {
      current_condition: [
        {
          temp_C: "30",
          FeelsLikeC: "33",
          humidity: "70",
          windspeedKmph: "10",
          weatherDesc: [
            {
              value: "Sunny",
            },
          ],
        },
      ],
    };

    const result = mapWeatherToDomain(
      location,
      weatherDto
    );

    expect(result.city).toBe("Jakarta");

    expect(
      result.weather.temperature
    ).toBe(30);

    expect(
      result.weather.feelsLike
    ).toBe(33);

    expect(
      result.weather.humidity
    ).toBe(70);
  });

  it("should throw when weather missing", () => {
    expect(() =>
      mapWeatherToDomain(
        {
          lat: "1",
          lon: "1",
          display_name: "Test",
        },
        {}
      )
    ).toThrow();
  });
});