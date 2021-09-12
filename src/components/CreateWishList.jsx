import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CreateWishList = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);