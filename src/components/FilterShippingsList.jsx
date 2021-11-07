import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterShippingsList = props => (
  <Filter {...props}>
    <TextInput label="Search Shippings" source="q" alwaysOn />
    <ReferenceInput label="Id" source="id" reference="shippings" allowEmpty>
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);