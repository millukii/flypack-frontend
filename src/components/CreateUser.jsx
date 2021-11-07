import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  NumberInput,
  PasswordInput,
  SelectInput,
} from "react-admin";
import { useFormState } from 'react-final-form';

const choices = [
  "Activo",
  "Inactivo"
];

const intParser = v => {
  return parseInt(v);
};

export const CreateUser = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput  required label="Identificador"  source="id" />
      <TextInput required label="Nombre" source="user" />
      <PasswordInput required label="Password" source="password" initiallyVisible />
      <ReferenceInput required label="Rol" source="rol_id" reference="roles" parse={intParser}>
        <SelectInput optionText="rol" />
      </ReferenceInput>
      <ReferenceInput required label="Estado" source="user_state_id" reference="userstates" parse={intParser}>
        <SelectInput optionText="state" />
      </ReferenceInput>
      <ReferenceInput required label="Registro Personal" source="people_id" reference="people" parse={intParser}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);