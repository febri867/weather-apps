import { WeatherApiError } from "../errors/WeatherApiError";
import { ENV } from "../config/env";
import type { WeatherDto } from "../types/weather";
import { logger } from '../lib/logger.ts';

export async function getWeatherDto(
  city: string,
  signal?: AbortSignal
): Promise<WeatherDto> {
  logger.info(
    "Fetching weather",
    city
  );

  const response = await fetch(
    `${ENV.WEATHER_API_URL}/${encodeURIComponent(
      city
    )}?format=j1`,
    {
      signal,
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    logger.error(
      "Weather API failed",
      response.status
    );

    throw new WeatherApiError(
      `Weather API failed (${response.status})`
    );
  }

  return response.json();
}