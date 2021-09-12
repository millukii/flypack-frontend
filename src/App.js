import * as React from "react";
import { Admin, Resource } from "react-admin";
//import jsonServerProvider from "ra-data-json-server";
import  DataProvider  from "./data/dataProvider.js";
import { UserList } from "./components/UserList.jsx";
import { EditUser } from "./components/EditUser";
import { CreateUser } from "./components/CreateUser.jsx";

import { CompanyList } from "./components/CompanyList.jsx";
import { EditCompany } from "./components/EditCompany.jsx";
import { CreateCompany } from "./components/CreateCompany.jsx";


import { PeopleList } from "./components/PeopleList.jsx";
import { EditPeople } from "./components/EditPeople.jsx";
import { CreatePeople } from "./components/CreatePeople.jsx";

import { RoleList } from "./components/RoleList.jsx";
import { EditRole } from "./components/EditRole.jsx";
import { CreateRole } from "./components/CreateRole.jsx";

import { ShippingList } from "./components/ShippingList.jsx";
import { EditShipping } from "./components/EditShipping.jsx";
import { CreateShipping } from "./components/CreateShipping.jsx";

import { ShippingStatesList } from "./components/ShippingStatesList.jsx";
import { EditShippingState} from "./components/EditShippingState.jsx";
import { CreateShippingState } from "./components/CreateShippingState.jsx";



import { WishList } from "./components/WishList.jsx";
import { EditWishList } from "./components/EditWishList.jsx";
import { CreateWishList } from "./components/CreateWishList.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
import authProvider from './AuthProvider';
import LoginPage from './LoginPage';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


const App = () => (

  <Admin dashboard={Dashboard} dataProvider={DataProvider}>
    <Resource name="userstates" />
    <Resource name="users"
       list={UserList}
      edit={EditUser}
      create={CreateUser}
    />
    <Resource
      name="companies"
      list={CompanyList}
      edit={EditCompany}
      create={CreateCompany}
    />
        <Resource
      name="people"
      list={PeopleList}
      edit={EditPeople}
      create={CreatePeople}
    />
        <Resource
      name="roles"
      list={RoleList}
      edit={EditRole}
      create={CreateRole}
    />
        <Resource
      name="shippings"
      list={ShippingList}
      edit={EditShipping}
      create={CreateShipping}
    />
        <Resource
      name="shippingstates"
      list={ShippingStatesList}
      edit={EditShippingState}
      create={CreateShippingState}
    />
  </Admin>
);

export default App;