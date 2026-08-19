import useHooks from "../useHooks";

export default function TemperatureCard() {
    const {
        weather,
    } = useHooks()
    return (
        <div className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-zinc-400">
                        Current Temperature
                    </p>

                    <h2 className="mt-4 text-7xl font-bold">
                        {weather?.weather.temperature}°
                    </h2>

                    <p className="mt-4 text-xl text-zinc-300">
                        {
                            weather?.weather
                                .description
                        }
                    </p>

                    <p className="mt-2 text-zinc-500">
                        Feels like{" "}
                        {
                            weather?.weather
                                .feelsLike
                        }
                        °
                    </p>
                </div>

                <div className="rounded-3xl bg-zinc-800 p-6 text-6xl">
                    ☁️
                </div>
            </div>

            <div className="mt-10 h-32 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20" />
        </div>
    )
}