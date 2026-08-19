import type { WeatherData } from "../../../domain/weather";
type Props = {
  weather: WeatherData;
};
export default function LocationCard({
 weather,
}: Props) {

    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold">
                Location
            </h3>

            <p className="mt-4 text-zinc-300">
                {weather?.city}
            </p>

            <div className="mt-6 space-y-4">
                <div>
                    <p className="text-sm text-zinc-500">
                        Timezone
                    </p>
                    <p>{weather?.timezone}</p>
                </div>

                <div>
                    <p className="text-sm text-zinc-500">
                        Local Time
                    </p>
                    <p>{weather?.localTime}</p>
                </div>

                <div>
                    <p className="text-sm text-zinc-500">
                        Coordinates
                    </p>
                    <p>
                        {weather?.latitude?.toFixed(
                            4
                        )}
                        ,{" "}
                        {weather?.longitude?.toFixed(
                            4
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}