import React from "react";
import { logger } from '../../lib/logger';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  Props,
  State
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(
    error: Error
  ) {
    logger.error( "React Error Boundary",error);
  }

  render() {
    if (
      this.state.hasError
    ) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          Something went wrong.
        </div>
      );
    }

    return this.props
      .children;
  }
}