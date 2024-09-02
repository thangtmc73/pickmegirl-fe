/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';

export default function loadable(factory: any, fallback?: any) {
  const componentPromise = factory;
  const LazyComponent = lazy(componentPromise);

  return (props: any) => (
    <Suspense fallback={fallback || null}>
      <ErrorBoundary>
        <LazyComponent {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}
