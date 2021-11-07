import React from "react"
import { List, Datagrid, TextField} from 'react-admin';
import { FilterShippingsList } from "./FilterShippingsList";

export const ShippingList = props => (
    <List filters={<FilterShippingsList/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="order_nro" />
            <TextField source="boleta_nro" />
            <TextField source="type" />
            <TextField source="value" />
            <TextField source="date" />
            <TextField source="shipping_states_id" />
            <TextField source="companies_id" />
            <TextField source="delivery_id" />
            <TextField source="client_id" />
        </Datagrid>
    </List>
);