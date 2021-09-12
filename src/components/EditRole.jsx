import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const EditRole = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="rol" />
    </SimpleForm>
  </Edit>
);