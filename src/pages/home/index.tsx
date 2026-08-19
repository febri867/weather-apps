import useWeather from "../../hooks/useWeather";

import Header from "../../components/header";
import SearchInput from "../../components/searchInput";

import TemperatureCard from "./components/TemperatureCard";
import LocationCard from "./components/LocationCard";
import Stats from "./components/Stats";
import WeatherSkeleton from "../../components/weatherSkeleton";

export default function WeatherDashboard() {
    const {
        city,
        setCity,
        loading,
        weather,
        error,
        searchWeather,
    } = useWeather();

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="mx-auto max-w-7xl p-6">
                <Header />

                <SearchInput
                    city={city}
                    setCity={setCity}
                    searchWeather={searchWeather}
                    loading={loading}
                />

                {error && (
                    <div className="mt-4 rounded-lg bg-red-500/10 p-4 text-red-400">
                        {error}
                    </div>
                )}

                {
                    loading && (
                        <WeatherSkeleton />
                    )
                }

                {weather && (
                    <>
                        <div className="grid gap-6 lg:grid-cols-3">
                            <TemperatureCard
                                weather={weather}
                            />

                            <LocationCard
                                weather={weather}
                            />
                        </div>

                        <Stats weather={weather} />
                    </>
                )}
            </div>
        </div>
    );
}