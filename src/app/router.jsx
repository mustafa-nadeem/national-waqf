import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ImpactPage from '../pages/ImpactPage';
import LearnMorePage from '../pages/LearnMorePage';
import ConnectPage from '../pages/ConnectPage';
import ApplyPage from '../pages/ApplyPage';
import SignInPage from '../pages/SignInPage';
import DonatePage from '../pages/DonatePage';
import DashboardPage from '../pages/DashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'impact',
        element: <ImpactPage />,
      },
      {
        path: 'learn-more',
        element: <LearnMorePage />,
      },
      {
        path: 'connect',
        element: <ConnectPage />,
      },
      {
        path: 'apply',
        element: <ApplyPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'donate',
        element: <DonatePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
