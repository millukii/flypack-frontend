import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  PasswordInput,
  SelectInput,
} from "react-admin";

export const EditUser = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="user" />
      <PasswordInput label="Password" source="password" initiallyVisible />
      <ReferenceInput label="Rol" source="rol_id" reference="roles">
        <SelectInput optionText="rol" />
      </ReferenceInput>
      <ReferenceInput label="Estado" source="user_state_id" reference="userstates">
        <SelectInput optionText="state" />
      </ReferenceInput>
      <ReferenceInput label="Registro Personal" source="people_id" reference="people">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);