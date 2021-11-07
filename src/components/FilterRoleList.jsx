import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterRoleList = props => (
  <Filter {...props}>
    <TextInput label="Search Role" source="q" alwaysOn />
    <ReferenceInput label="Rol" source="rol" reference="roles" allowEmpty>
      <SelectInput optionText="rol" />
    </ReferenceInput>
  </Filter>
);