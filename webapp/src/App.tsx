import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import * as routes from './lib/rotutes';
import { TrpcProvider } from './lib/trpc';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { NewIdeaPage } from './pages/NewIdeaPage';
import { ViewIdeaPage } from './pages/VieweIdeaPage';
import './styles/global.scss';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
            <Route
              path={routes.getViewIdeaRoute({ ideaNick: ':ideaNick' })}
              element={<ViewIdeaPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
