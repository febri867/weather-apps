import type { WeatherData } from "../../../domain/weather";
import {WEATHER_UNIT} from "../../../constants/weather";

type Props = {
  weather: WeatherData;
};

export default function Stats({
  weather,
}: Props) {
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
                    {WEATHER_UNIT.HUMIDITY}
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
                        {WEATHER_UNIT.WIND_SPEED}
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
                    {WEATHER_UNIT.TEMPERATURE}
                </h3>
            </div>
        </div>
    )
}