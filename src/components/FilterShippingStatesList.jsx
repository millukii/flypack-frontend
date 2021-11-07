import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterShippingStatesList = props => (
  <Filter {...props}>
    <TextInput label="Search Shipping state" source="q" alwaysOn />
    <ReferenceInput label="State" source="id" reference="state" allowEmpty>
      <SelectInput optionText="state" />
    </ReferenceInput>
  </Filter>
);