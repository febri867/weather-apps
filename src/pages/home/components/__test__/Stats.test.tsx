import { render, screen } from "@testing-library/react";
import Stats from "../Stats";
import type { WeatherData } from "../../../../domain/weather";

const mockWeather: WeatherData = {
  city: "Jakarta",
  latitude: -6.1754,
  longitude: 106.8272,
  timezone: "Asia/Jakarta",
  localTime: "Tuesday, August 19, 2026",
  weather: {
    temperature: 30,
    feelsLike: 33,
    humidity: 70,
    windSpeed: 10,
    description: "Sunny",
  },
};

describe("Stats", () => {
  beforeEach(() => {
    render(<Stats weather={mockWeather} />);
  });

  it("renders humidity section", () => {
    expect(
      screen.getByText("Humidity")
    ).toBeInTheDocument();

    expect(
      screen.getByText("70%")
    ).toBeInTheDocument();
  });

  it("renders wind speed section", () => {
    expect(
      screen.getByText("Wind Speed")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/10/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText("km/h")
    ).toBeInTheDocument();
  });

  it("renders feels like section", () => {
    expect(
      screen.getByText("Feels Like")
    ).toBeInTheDocument();

    expect(
      screen.getByText("33°")
    ).toBeInTheDocument();
  });
});