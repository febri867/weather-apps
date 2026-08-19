import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import TemperatureCard from '../TemperatureCard';
import useHooks from '../../useHooks';

jest.mock('../../useHooks');

const mockedUseHooks = useHooks as jest.MockedFunction<
  typeof useHooks
>;

describe('TemperatureCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders current temperature information', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        weather: {
          temperature: 28,
          description: 'Partly Cloudy',
          feelsLike: 31,
        },
      },
    } as any);

    render(<TemperatureCard />);

    expect(
      screen.getByText('Current Temperature'),
    ).toBeTruthy();

    expect(
      screen.getByText('28°'),
    ).toBeTruthy();

    expect(
      screen.getByText('Partly Cloudy'),
    ).toBeTruthy();

    expect(
      screen.getByText(/Feels like 31°/i),
    ).toBeTruthy();
  });

  it('renders weather icon', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        weather: {
          temperature: 25,
          description: 'Cloudy',
          feelsLike: 27,
        },
      },
    } as any);

    render(<TemperatureCard />);

    expect(
      screen.getByText('☁️'),
    ).toBeTruthy();
  });

  it('renders different weather values', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        weather: {
          temperature: 15,
          description: 'Rainy',
          feelsLike: 13,
        },
      },
    } as any);

    render(<TemperatureCard />);

    expect(
      screen.getByText('15°'),
    ).toBeTruthy();

    expect(
      screen.getByText('Rainy'),
    ).toBeTruthy();

    expect(
      screen.getByText(/Feels like 13°/i),
    ).toBeTruthy();
  });
});