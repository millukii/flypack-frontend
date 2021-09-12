import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterUserList = props => (
  <Filter {...props}>
    <TextInput label="Search User" source="q" alwaysOn />
    <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);