import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Auth from 'src/utils/auth';

import DashboardLayout from 'src/layouts/dashboard';

import Loading from 'src/components/loading/loading';


export const IndexPage = lazy(() => import('src/pages/login'));
export const PageInitial = lazy(() => import('src/pages/app'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const AccountingPage = lazy(() => import('src/pages/accounting'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

const ProtectedRoutes = () => Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;

const routes = [
  {
    path: '/',
    element: (
      <DashboardLayout>
        <Suspense fallback={<Loading />}>
          <ProtectedRoutes />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <PageInitial />, index: true },
      { path: 'products', element: <ProductsPage /> },
      { path: 'accounting', element: <AccountingPage /> },
    ],
    protected: true,
  },
  { path: 'login', element: <IndexPage /> },
  { path: '404', element: <Page404 /> },
  { path: '*', element: <Navigate to="/404" replace /> },
];

export default function Router() {
  return useRoutes(routes);
}
