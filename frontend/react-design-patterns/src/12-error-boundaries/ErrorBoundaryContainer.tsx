import ErrorBoundary from './ErrorBoundary';
import ErrorFallback from './ErrorFallback';
import StatusWidget from './StatusWidget';
import UserProfile from './UserProfile';

const ErrorBoundaryContainer = () => {
  return (
    <div>
      <UserProfile />
      <ErrorBoundary fallback={ErrorFallback}>
        <StatusWidget />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryContainer;
