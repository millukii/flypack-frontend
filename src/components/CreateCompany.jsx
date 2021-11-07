import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CreateCompany = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput  source="id" />
      <TextInput source="commune" />
      <TextInput source="rut" />
      <TextInput source="dv" />
      <TextInput source="razon" />
      <TextInput source="city" />
      <TextInput source="people_id" />
      <TextInput multiline source="address" />
    </SimpleForm>
  </Create>
);