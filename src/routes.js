import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import EditCustomer from './pages/EditCustomer';
import EditShipping from './pages/EditShipping';
import ShippingAddPackages from './pages/ShippingAddPackages';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import PackageList from './pages/PackageList';
import OrderList from './pages/OrderList';
import ShippingList from './pages/ShippingList';
import Register from './pages/Register';
import Settings from './pages/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'customer-new', element: <EditCustomer /> },
      { path: 'orders', element: <OrderList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'packages', element: <PackageList /> },
      { path: 'shippings', element: <ShippingList /> },
      { path: 'shipping-new', element: <EditShipping /> },
      { path: 'shipping-add-packages', element: <ShippingAddPackages /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;