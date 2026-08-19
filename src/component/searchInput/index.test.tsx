import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './index';

describe('SearchInput', () => {
  const setCity = jest.fn();
  const searchWeather = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input and button', () => {
    render(
      <SearchInput
        city=""
        setCity={setCity}
        searchWeather={searchWeather}
        loading={false}
      />,
    );

    expect(
      screen.getByPlaceholderText(/search city/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /search/i,
      }),
    ).toBeInTheDocument();
  });

  it('calls setCity when user types', async () => {
    const user = userEvent.setup();

    render(
      <SearchInput
        city=""
        setCity={setCity}
        searchWeather={searchWeather}
        loading={false}
      />,
    );

    const input = screen.getByPlaceholderText(
      /search city/i,
    );

    await user.type(input, 'Jakarta');

    expect(setCity).toHaveBeenCalled();
    expect(setCity).toHaveBeenLastCalledWith('a');
  });

  it('calls searchWeather when button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <SearchInput
        city="Jakarta"
        setCity={setCity}
        searchWeather={searchWeather}
        loading={false}
      />,
    );

    await user.click(
      screen.getByRole('button', {
        name: /search/i,
      }),
    );

    expect(searchWeather).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(
      <SearchInput
        city="Jakarta"
        setCity={setCity}
        searchWeather={searchWeather}
        loading={true}
      />,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');
  });

  it('shows search text when not loading', () => {
    render(
      <SearchInput
        city="Jakarta"
        setCity={setCity}
        searchWeather={searchWeather}
        loading={false}
      />,
    );

    expect(
      screen.getByRole('button'),
    ).toHaveTextContent('Search');
  });
});