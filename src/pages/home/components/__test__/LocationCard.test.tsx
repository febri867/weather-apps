import { render, screen } from '@testing-library/react';
import LocationCard from '../LocationCard';
import useHooks from '../../useHooks';

jest.mock('../../useHooks');

const mockedUseHooks = useHooks as jest.MockedFunction<
  typeof useHooks
>;

describe('LocationCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders location information', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        city: 'Jakarta',
        timezone: 'Asia/Jakarta',
        localTime: '2026-08-19 09:00',
        latitude: -6.2088,
        longitude: 106.8456,
      },
    } as any);

    render(<LocationCard />);

    expect(
      screen.getByText('Location'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Jakarta'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Asia/Jakarta'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('2026-08-19 09:00'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('-6.2088, 106.8456'),
    ).toBeInTheDocument();
  });

  it('renders labels', () => {
    mockedUseHooks.mockReturnValue({
      weather: {
        city: 'Jakarta',
        timezone: 'Asia/Jakarta',
        localTime: '2026-08-19 09:00',
        latitude: -6.2088,
        longitude: 106.8456,
      },
    } as any);

    render(<LocationCard />);

    expect(
      screen.getByText('Timezone'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Local Time'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Coordinates'),
    ).toBeInTheDocument();
  });

  it('renders empty values when weather is undefined', () => {
    mockedUseHooks.mockReturnValue({
      weather: undefined,
    } as any);

    render(<LocationCard />);

    expect(
      screen.getByText('Location'),
    ).toBeInTheDocument();
  });
});