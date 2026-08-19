import { render, screen } from "@testing-library/react";

import ErrorBoundary from "./index";
import type { JSX } from 'react';

const originalError =
  console.error;

beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

function BrokenComponent():JSX.Element {
  throw new Error("boom");
}

describe("ErrorBoundary", () => {
  it("renders fallback ui", () => {
    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(
      screen.getByText(
        /Something went wrong/i
      )
    ).toBeInTheDocument();
  });
});