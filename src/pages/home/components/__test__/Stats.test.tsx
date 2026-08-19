import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import Stats from '../Stats';
import useHooks from '../../useHooks';

jest.mock('../../useHooks');

const mockedUseHooks = useHooks as jest.MockedFunction<
  typeof useHooks
>;

describe('Stats', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders humidity, wind speed and feels like values', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        weather: {
          humidity: 80,
          windSpeed: 15,
          feelsLike: 32,
        },
      },
    } as any);

    render(<Stats />);

    expect(
      screen.getByText('Humidity'),
    ).toBeTruthy();

    expect(
      screen.getByText('Wind Speed'),
    ).toBeTruthy();

    expect(
      screen.getByText('Feels Like'),
    ).toBeTruthy();

    expect(
      screen.getByText('80%'),
    ).toBeTruthy();

    expect(
      screen.getByText(/15/i),
    ).toBeTruthy();

    expect(
      screen.getByText(/km\/h/i),
    ).toBeTruthy();

    expect(
      screen.getByText('32°'),
    ).toBeTruthy();
  });

  it('renders labels correctly', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        weather: {
          humidity: 65,
          windSpeed: 10,
          feelsLike: 28,
        },
      },
    } as any);

    render(<Stats />);

    expect(
      screen.getByText('Humidity'),
    ).toBeTruthy();

    expect(
      screen.getByText('Wind Speed'),
    ).toBeTruthy();

    expect(
      screen.getByText('Feels Like'),
    ).toBeTruthy();
  });
});