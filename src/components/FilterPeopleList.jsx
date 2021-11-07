import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterPeopleList = props => (
  <Filter {...props}>
    <TextInput label="Search people" source="q" alwaysOn />
    <ReferenceInput label="Rut" source="rut" reference="people" allowEmpty>
      <SelectInput optionText="rut" />
    </ReferenceInput>
  </Filter>
);