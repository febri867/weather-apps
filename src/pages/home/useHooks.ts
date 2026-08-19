import { useState} from "react";
import type {WeatherData} from "../../domain/weather.ts";
import tzLookup from "tz-lookup";

function useHooks() {
    const [city, setCity] = useState("Jakarta");
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState<WeatherData | null>(null);

    const searchWeather = async () => {
        try {
            setLoading(true);

            // 1. OpenStreetMap
            const locationResponse = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                    city
                )}&format=jsonv2&limit=1`
            );

            const locations = await locationResponse.json();

            if (!locations.length) {
                alert("Location not found");
                return;
            }

            const location = locations[0];

            const lat = Number(location.lat);
            const lon = Number(location.lon);

            // 2. Timezone
            const timezone = tzLookup(lat, lon);

            const localTime = new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeStyle: "short",
                timeZone: timezone,
            }).format(new Date());

            // 3. Weather
            const weatherResponse = await fetch(
                `https://wttr.in/${encodeURIComponent(city)}?format=j1`
            );

            const weatherJson = await weatherResponse.json();

            const current =
                weatherJson.current_condition?.[0];

            setWeather({
                city: location.display_name,
                latitude: lat,
                longitude: lon,
                timezone,
                localTime,
                weather: {
                    temperature: Number(current.temp_C),
                    feelsLike: Number(current.FeelsLikeC),
                    humidity: Number(current.humidity),
                    windSpeed: Number(current.windspeedKmph),
                    description:
                        current.weatherDesc?.[0]?.value ??
                        "Unknown",
                },
            });
        } catch (error) {
            console.error(error);
            alert("Failed to load weather");
        } finally {
            setLoading(false);
        }
    };

    return{
        city,
        loading,
        weather,
        setCity,
        searchWeather
    }
}

export default useHooks;