import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { getWeatherByCity } from "../repositories/weather.repository";
import { DEFAULT_CITY } from '../constants/weather.ts';

export default function useWeather() {
  const [city, setCity] =
    useState(DEFAULT_CITY);

  const abortRef =
    useRef<AbortController | null>(
      null
    );

  const mutation = useMutation({
    mutationFn: async (
      city: string
    ) => {
      abortRef.current?.abort();

      const controller =
        new AbortController();

      abortRef.current =
        controller;

      return getWeatherByCity(
        city,
        controller.signal
      );
    },
  });

  return {
    city,
    setCity,

    weather: mutation.data,

    loading:
    mutation.isPending,

    error:
      mutation.error?.message ??
      null,

    searchWeather: () =>
      mutation.mutate(city),
  };
}