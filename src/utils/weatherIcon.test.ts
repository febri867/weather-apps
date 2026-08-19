import { getWeatherIcon } from "./weatherIcon";

describe("getWeatherIcon", () => {
  it("returns rain icon", () => {
    expect(
      getWeatherIcon("heavy rain")
    ).toBe("🌧️");
  });

  it("returns cloud icon", () => {
    expect(
      getWeatherIcon("cloudy")
    ).toBe("☁️");
  });

  it("returns sunny icon", () => {
    expect(
      getWeatherIcon("sunny")
    ).toBe("☀️");
  });

  it("returns default icon", () => {
    expect(
      getWeatherIcon("unknown")
    ).toBe("🌤️");
  });
});