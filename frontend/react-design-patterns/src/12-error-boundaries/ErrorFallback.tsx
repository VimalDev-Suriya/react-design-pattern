interface ErrorFallbackProps {
  error: Error | null;
  onRetry: () => void;
}

const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
  console.log('Error Log', error);

  return (
    <div>
      <h3>Something went wrong</h3>
      <p>{error?.message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default ErrorFallback;
