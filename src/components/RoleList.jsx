import React from "react"
import { List, Datagrid, TextField} from 'react-admin';

import { FilterRoleList } from "./FilterRoleList";

export const RoleList = props => (
    <List filters={<FilterRoleList/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="rol" />
        </Datagrid>
    </List>
);