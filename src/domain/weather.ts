export interface WeatherData {
    city: string;
    latitude: number;
    longitude: number;
    timezone: string;
    localTime: string;
    weather: {
        temperature: number;
        feelsLike: number;
        humidity: number;
        windSpeed: number;
        description: string;
    };
}