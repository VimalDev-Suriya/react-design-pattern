import { Component, Fragment, type ErrorInfo, type ReactNode } from 'react';

type FallbackComponent = React.ComponentType<{
  error: Error | null;
  onRetry: () => void;
}>;

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: FallbackComponent;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  retryKey: number;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    retryKey: 0,
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  // * Should be static, because React will call this without the instance object,
  // Because the parent component will become unstable, if any error happens to its children
  // On that error occasion, intializing the component will again throw another set of error which makes the process difficult.
  // So we use static type to execute/capture if there was any error.
  // * Also this function should not have any side effects because it executes during render phase.
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  // * It executes during commit phase.
  // * Can have side effects
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Error logs', error);
    console.log('Stack trace', errorInfo);
  }

  // * Handling the retry
  handleRetry = () => {
    // * by default the state change will trigger the re-render
    // * But its best practice to impleemnt the key while rendering the child, so during the reconcilaition phase, new key changes unmounts the old and mount the new child
    this.setState((prev) => ({
      hasError: false,
      error: null,
      retryKey: prev.retryKey + 1,
    }));
  };

  render(): ReactNode {
    const { children, fallback: Fallback } = this.props;

    if (this.state.hasError && Fallback)
      return <Fallback error={this.state.error} onRetry={this.handleRetry} />;

    return <Fragment key={this.state.retryKey}>{children}</Fragment>;
  }
}

export default ErrorBoundary;
