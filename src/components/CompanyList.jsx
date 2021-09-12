import React from "react"
import { List, Datagrid, TextField} from 'react-admin';
import { FilterCompanyList } from "./FilterCompanyList";

export const CompanyList = props => (
      <List filters={<FilterCompanyList/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="rut" />
            <TextField source="dv" />
            <TextField source="razon" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="commune" />
            <TextField source="people_id" />
        </Datagrid>
    </List>
);