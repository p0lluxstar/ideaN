import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { getAllIdeasRoute, getViewIdeaRoute } from './lib/rotutes';
import { TrpcProvider } from './lib/trpc';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { ViewIdeaPage } from './pages/VieweIdeaPage';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={getViewIdeaRoute({ ideaNick: ':ideaNick' })} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
