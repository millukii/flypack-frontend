import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const EditCompany = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="commune" />
      <TextInput source="rut" />
      <TextInput source="dv" />
      <TextInput source="razon" />
      <TextInput source="city" />
      <TextInput source="people_id" />
      <TextInput multiline source="address" />
    </SimpleForm>
  </Edit>
);