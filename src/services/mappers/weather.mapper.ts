import tzLookup from "tz-lookup";

import type { WeatherData } from "../../domain/weather";
import type { NominatimLocation } from "../../types/geocoding";
import type { WeatherDto } from "../../types/weather";

export function mapWeatherToDomain(
  location: NominatimLocation,
  weatherDto: WeatherDto
): WeatherData {
  const latitude = Number(location.lat);
  const longitude = Number(location.lon);

  const timezone = tzLookup(
    latitude,
    longitude
  );

  const localTime =
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: timezone,
    }).format(new Date());

  const current =
    weatherDto.current_condition?.[0];

  if (!current) {
    throw new Error(
      "Current weather unavailable"
    );
  }

  return {
    city: location.display_name,
    latitude,
    longitude,
    timezone,
    localTime,
    weather: {
      temperature: Number(current.temp_C),
      feelsLike: Number(
        current.FeelsLikeC
      ),
      humidity: Number(
        current.humidity
      ),
      windSpeed: Number(
        current.windspeedKmph
      ),
      description:
        current.weatherDesc?.[0]
          ?.value ?? "Unknown",
    },
  };
}