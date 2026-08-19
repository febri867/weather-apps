const requiredEnv = [
  "VITE_GEOCODING_API_URL",
  "VITE_WEATHER_API_URL",
] as const;

requiredEnv.forEach((key) => {
  if (!import.meta.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const ENV = {
  GEOCODING_API_URL:
  import.meta.env.VITE_GEOCODING_API_URL,

  WEATHER_API_URL:
  import.meta.env.VITE_WEATHER_API_URL,
} as const;