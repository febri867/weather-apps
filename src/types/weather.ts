export type WeatherDto = {
  current_condition?: Array<{
    temp_C: string;
    FeelsLikeC: string;
    humidity: string;
    windspeedKmph: string;
    weatherDesc?: Array<{
      value: string;
    }>;
  }>;
};