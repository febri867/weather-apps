import { act, renderHook, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';
import tzLookup from 'tz-lookup';
import useHooks from '../../useHooks';

jest.mock('tz-lookup');

const mockedTzLookup = jest.mocked(tzLookup);

describe('useHooks', () => {
  const originalFetch = globalThis.fetch;
  const originalAlert = globalThis.alert;

  beforeEach(() => {
    jest.clearAllMocks();

    globalThis.alert = jest.fn();

    mockedTzLookup.mockReturnValue(
      'Asia/Jakarta',
    );
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    globalThis.alert = originalAlert;
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() =>
      useHooks(),
    );

    expect(result.current.city).toBe(
      'Jakarta',
    );
    expect(result.current.loading).toBe(
      false,
    );
    expect(result.current.weather).toBe(
      null,
    );
  });

  it('should update city', () => {
    const { result } = renderHook(() =>
      useHooks(),
    );

    act(() => {
      result.current.setCity('Bandung');
    });

    expect(result.current.city).toBe(
      'Bandung',
    );
  });

  it('should load weather successfully', async () => {
    const fetchMock = jest.fn();

    fetchMock.mockImplementationOnce(
      async () =>
        ({
          json: async () => [
            {
              display_name:
                'Jakarta, Indonesia',
              lat: '-6.2088',
              lon: '106.8456',
            },
          ],
        }) as Response,
    );

    fetchMock.mockImplementationOnce(
      async () =>
        ({
          json: async () => ({
            current_condition: [
              {
                temp_C: '28',
                FeelsLikeC: '31',
                humidity: '80',
                windspeedKmph: '15',
                weatherDesc: [
                  {
                    value:
                      'Partly Cloudy',
                  },
                ],
              },
            ],
          }),
        }) as Response,
    );

    globalThis.fetch =
      fetchMock as typeof fetch;

    const { result } = renderHook(() =>
      useHooks(),
    );

    await act(async () => {
      await result.current.searchWeather();
    });

    await waitFor(() => {
      expect(
        result.current.weather,
      ).not.toBeNull();
    });

    expect(
      result.current.weather?.city,
    ).toBe('Jakarta, Indonesia');

    expect(
      result.current.weather?.latitude,
    ).toBe(-6.2088);

    expect(
      result.current.weather?.longitude,
    ).toBe(106.8456);

    expect(
      result.current.weather?.timezone,
    ).toBe('Asia/Jakarta');

    expect(
      result.current.weather?.weather
        .temperature,
    ).toBe(28);

    expect(
      result.current.weather?.weather
        .feelsLike,
    ).toBe(31);

    expect(
      result.current.weather?.weather
        .humidity,
    ).toBe(80);

    expect(
      result.current.weather?.weather
        .windSpeed,
    ).toBe(15);

    expect(
      result.current.weather?.weather
        .description,
    ).toBe('Partly Cloudy');

    expect(
      mockedTzLookup,
    ).toHaveBeenCalledWith(
      -6.2088,
      106.8456,
    );
  });

  it('should show alert when location is not found', async () => {
    const fetchMock = jest.fn();

    fetchMock.mockImplementationOnce(
      async () =>
        ({
          json: async () => [],
        }) as Response,
    );

    globalThis.fetch =
      fetchMock as typeof fetch;

    const { result } = renderHook(() =>
      useHooks(),
    );

    await act(async () => {
      await result.current.searchWeather();
    });

    expect(
      globalThis.alert,
    ).toHaveBeenCalledWith(
      'Location not found',
    );
  });

  it('should show alert when request fails', async () => {
    const fetchMock = jest.fn();

    fetchMock.mockImplementationOnce(
      async () => {
        throw new Error(
          'Network Error',
        );
      },
    );

    globalThis.fetch =
      fetchMock as typeof fetch;

    const { result } = renderHook(() =>
      useHooks(),
    );

    await act(async () => {
      await result.current.searchWeather();
    });

    expect(
      globalThis.alert,
    ).toHaveBeenCalledWith(
      'Failed to load weather',
    );
  });
});