import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import EditCustomer from './pages/EditCustomer';
import AddCustomer from './pages/AddCustomer';
import EditShipping from './pages/EditShipping';
import ShippingAddPackages from './pages/ShippingAddPackages';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ImportExcelCustomers from './pages/ImportExcelCustomers';
import ImportExcelPreOrders from './pages/ImportExcelPreOrders';
import ProductList from './pages/ProductList';
import PackageList from './pages/PackageList';
import OrderList from './pages/OrderList';
import TravelerList from './pages/TravelerList';
import ShippingList from './pages/ShippingList';
import ManifiestList from './pages/ManifiestList';
import Register from './pages/Register';
import Settings from './pages/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'customer-new', element: <AddCustomer /> },
      { path: 'customer-edit', element: <EditCustomer /> },
      { path: 'import', element: <ImportExcelCustomers /> },
      { path: 'import-preorders', element: <ImportExcelPreOrders /> },
      { path: 'orders', element: <OrderList /> },
      { path: 'travelers', element: <TravelerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'packages', element: <PackageList /> },
      { path: 'manifiests', element: <ManifiestList /> },
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