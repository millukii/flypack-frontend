import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CreateShipping = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="order_nro" />
      <TextInput source="boleta_nro" />
      <TextInput source="type" />
      <TextInput source="value" />
      <TextInput source="date" />
      <TextInput source="shipping_dates_id" />
      <TextInput source="companies_id" />
      <TextInput source="delivery_id" />
      <TextInput source="client_id" />
    </SimpleForm>
  </Create>
);