import { lazy } from 'react';

export const tabsLazyImports = {
    'tabs/dummyTable.js': lazy(() => import(/* webpackChunkName: "dummyTable" */ './dummyTable.js')),
    'tabs/dummyChart.js': lazy(() => import(/* webpackChunkName: "dummyChart" */ './dummyChart.js')),
    'tabs/dummyList.js': lazy(() => import(/* webpackChunkName: "dummyList" */ './dummyList.js')),
  }
;
