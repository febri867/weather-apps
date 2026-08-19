import { LocationNotFoundError } from "../errors/LocationNotFoundError";
import { ENV } from "../config/env";
import type { NominatimLocation } from "../types/geocoding";
import { logger } from '../lib/logger';

export async function getLocation(
  city: string,
  signal?: AbortSignal
): Promise<NominatimLocation> {
  logger.info(
    "Fetching geocoding",
    city
  );
  const response = await fetch(
    `${ENV.GEOCODING_API_URL}/search?q=${encodeURIComponent(
      city
    )}&format=jsonv2&limit=1`,
    {
      signal,
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Geocoding failed (${response.status})`
    );
  }

  const data: NominatimLocation[] =
    await response.json();

  if (!data.length) {
    throw new LocationNotFoundError();
  }
  logger.info(
    "Geocoding success",
    response.status
  );
  return data[0];
}