import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTabs } from './hooks/useTab';
import { Header, LazyTabComponent } from './components';

function App() {
  const { tabs, loading, error } = useTabs();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        <Header tabs={tabs} />
        <Routes>
          {tabs.map((tab) => (
            <Route
              key={tab.id}
              path={tab.id}
              element={<LazyTabComponent path={tab.path} />}
            />
          ))}
          <Route path='/' element={<Navigate to={tabs[0].id} replace />} />
        </Routes>
      </>
    </>
  );
}

export default App;
