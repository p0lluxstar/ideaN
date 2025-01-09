import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import * as routes from './lib/rotutes';
import { TrpcProvider } from './lib/trpc';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { NewIdeaPage } from './pages/NewIdeaPage';
import { SignOutPage } from './pages/SignOutPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SingInPage';
import { ViewIdeaPage } from './pages/VieweIdeaPage';
import './styles/global.scss';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.getSignOutRoute()} element={<SignOutPage />} />
          <Route element={<Layout />}>
            <Route path={routes.getSignUpRoute()} element={<SignUpPage />} />
            <Route path={routes.getSignInRoute()} element={<SignInPage />} />
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
