import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CreatePeople = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="rut" />
      <TextInput source="dv" />
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput multiline source="address" />
      <TextInput source="city" />
      <TextInput source="commune" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="profile_id" />
    </SimpleForm>
  </Create>
);