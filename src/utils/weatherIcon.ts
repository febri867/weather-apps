export function getWeatherIcon(
  description: string
): string {
  const value =
    description.toLowerCase();

  if (
    value.includes("rain")
  )
    return "🌧️";

  if (
    value.includes("cloud")
  )
    return "☁️";

  if (
    value.includes("sun")
  )
    return "☀️";

  if (
    value.includes("storm")
  )
    return "⛈️";

  return "🌤️";
}