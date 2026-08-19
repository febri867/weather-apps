import { getLocation } from "../services/geocoding.service";
import { getWeatherDto } from "../services/weather.service";
import { mapWeatherToDomain } from "../services/mappers/weather.mapper";

import type { WeatherData } from "../domain/weather";

export async function getWeatherByCity(
  city: string,
  signal?: AbortSignal
): Promise<WeatherData> {
  const [location, weatherDto] =
    await Promise.all([
      getLocation(city, signal),
      getWeatherDto(city, signal),
    ]);

  return mapWeatherToDomain(
    location,
    weatherDto
  );
}