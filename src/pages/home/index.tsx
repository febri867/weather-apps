import useHooks from "./useHooks.ts";
import Header from "../../component/header";
import SearchInput from "../../component/searchInput";
import TemperatureCard from "./components/TemperatureCard.tsx";
import LocationCard from "./components/LocationCard.tsx";
import Stats from "./components/Stats.tsx";

export default function WeatherDashboard() {
  const {
      city,
      loading,
      weather,
      setCity,
      searchWeather
  } = useHooks()

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="mx-auto max-w-7xl p-6">
               <Header/>
                <SearchInput city={city} setCity={setCity} searchWeather={searchWeather} loading={loading}/>

                {weather && (
                    <>
                        {/* Main Section */}
                        <div className="grid gap-6 lg:grid-cols-3">
                            {/* Temperature Card */}
                            <TemperatureCard/>
                            {/* Location Card */}
                            <LocationCard/>
                        </div>

                        {/* Stats */}
                        <Stats/>
                    </>
                )}
            </div>
        </div>
    );
}