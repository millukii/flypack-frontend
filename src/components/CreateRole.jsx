import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CreateRole = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="rol" />
    </SimpleForm>
  </Create>
);