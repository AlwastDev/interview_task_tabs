import React, { FC, Suspense } from 'react';
import { LazyTabComponentProps } from './type';
import { tabsLazyImports } from '../../tabs/tabs';

const LazyTabComponent: FC<LazyTabComponentProps> = ({ path }) => {
  const LazyComponent = tabsLazyImports[path as keyof typeof tabsLazyImports];

  if (!LazyComponent) {
    return <div>Component not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyTabComponent;
