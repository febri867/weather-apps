import type { WeatherData } from "../../domain/weather";

export interface WeatherService {
  getWeather(
    city: string,
    signal?: AbortSignal
  ): Promise<WeatherData>;
}