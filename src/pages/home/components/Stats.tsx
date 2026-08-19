import useHooks from "../useHooks";

export default function Stats(){
    const {
        weather
    } = useHooks()
    return (
        <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-zinc-500">
                    Humidity
                </p>
                <h3 className="mt-3 text-4xl font-bold">
                    {
                        weather?.weather
                            .humidity
                    }
                    %
                </h3>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-zinc-500">
                    Wind Speed
                </p>
                <h3 className="mt-3 text-4xl font-bold">
                    {
                        weather?.weather
                            .windSpeed
                    }
                    <span className="text-lg">
                    {" "}
                        km/h
                  </span>
                </h3>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-zinc-500">
                    Feels Like
                </p>
                <h3 className="mt-3 text-4xl font-bold">
                    {
                        weather?.weather
                            .feelsLike
                    }
                    °
                </h3>
            </div>
        </div>
    )
}