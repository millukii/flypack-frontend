import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from "react-admin";

import { WishListFilter } from "./FilterWishList";

export const WishList = props => (
  <List filters={<WishListFilter/>} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);