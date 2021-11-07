import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterCompanyList = props => (
  <Filter {...props}>
    <TextInput label="Search Company" source="q" alwaysOn />
    <ReferenceInput label="Rut" source="rut" reference="companies" allowEmpty>
      <SelectInput optionText="rut" />
    </ReferenceInput>
  </Filter>
);