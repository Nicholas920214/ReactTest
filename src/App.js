import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import React from 'react'; // for the using of HashRouter
import Loading from './pages/Loading.js';

// Lazy Layout
const LazySharedPage = React.lazy(() => import("./pages/SharedPage"));
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAbout = React.lazy(() => import("./pages/About.js"));
const LazyMenu = React.lazy(() => import("./pages/Menu.js"));
const LazyReserve = React.lazy(() => import("./pages/Reserve"));
const LazyError = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* Wrapped in Routes */}
        <Routes>
          <Route
            path='/'
            element={
              <React.Suspense fallback={<Loading />}>
                <LazySharedPage />
              </React.Suspense>
            }
          >
            {/* Index will always match the path="/" */}
            <Route 
              index
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyHome />
                </React.Suspense>
              }
            />
            <Route 
              path='about'
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route
              path="menu"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyMenu />
                </React.Suspense>
              }
            />
            <Route
              path="reserve"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyReserve />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyError />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
