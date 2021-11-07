import React from "react"
import { List, Datagrid, TextField} from 'react-admin';

import { FilterPeopleList } from "./FilterPeopleList";

export const PeopleList = props => (
    <List filters={<FilterPeopleList/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="rut" />
            <TextField source="dv" />
            <TextField source="name" />
            <TextField source="lastname" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="commune" />
            <TextField source="profile_id" />
        </Datagrid>
    </List>
);