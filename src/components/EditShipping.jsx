import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const EditShipping = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
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
  </Edit>
);