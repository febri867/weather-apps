import { render, screen } from "@testing-library/react";
import LocationCard from "../LocationCard";
import type { WeatherData } from "../../../../domain/weather";

const mockWeather: WeatherData = {
  city: "Special Capital Region of Jakarta, Indonesia",
  latitude: -6.1754049,
  longitude: 106.827168,
  timezone: "Asia/Jakarta",
  localTime: "Tuesday, August 19, 2026 at 3:00 PM",
  weather: {
    temperature: 30,
    feelsLike: 33,
    humidity: 70,
    windSpeed: 10,
    description: "Sunny",
  },
};

describe("LocationCard", () => {
  it("renders location title", () => {
    render(<LocationCard weather={mockWeather} />);

    expect(
      screen.getByText("Location")
    ).toBeInTheDocument();
  });

  it("renders city name", () => {
    render(<LocationCard weather={mockWeather} />);

    expect(
      screen.getByText(
        "Special Capital Region of Jakarta, Indonesia"
      )
    ).toBeInTheDocument();
  });

  it("renders timezone", () => {
    render(<LocationCard weather={mockWeather} />);

    expect(
      screen.getByText("Asia/Jakarta")
    ).toBeInTheDocument();
  });

  it("renders local time", () => {
    render(<LocationCard weather={mockWeather} />);

    expect(
      screen.getByText(
        "Tuesday, August 19, 2026 at 3:00 PM"
      )
    ).toBeInTheDocument();
  });

  it("renders formatted coordinates", () => {
    render(<LocationCard weather={mockWeather} />);

    expect(
      screen.getByText("-6.1754, 106.8272")
    ).toBeInTheDocument();
  });
});