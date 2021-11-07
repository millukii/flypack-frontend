import React from "react"
import { List, Datagrid, TextField} from 'react-admin';
import { FilterShippingStatesList } from "./FilterShippingStatesList";

export const ShippingStatesList = props => (
    <List filters={<FilterShippingStatesList/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="state" />
        </Datagrid>
    </List>
);