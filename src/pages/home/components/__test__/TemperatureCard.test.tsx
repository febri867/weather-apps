import { render, screen } from "@testing-library/react";

import TemperatureCard from "../TemperatureCard";

describe("TemperatureCard", () => {
    it("renders weather data", () => {
        render(
            <TemperatureCard
                weather={{
                    city: "Jakarta",
                    latitude: -6,
                    longitude: 106,
                    timezone: "Asia/Jakarta",
                    localTime: "Today",
                    weather: {
                        temperature: 30,
                        feelsLike: 32,
                        humidity: 70,
                        windSpeed: 10,
                        description: "Sunny",
                    },
                }}
            />
        );

        expect(
            screen.getByText("30°")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Sunny")
        ).toBeInTheDocument();
    });
});