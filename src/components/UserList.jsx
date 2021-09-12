import React from "react"
import { List, Datagrid, TextField} from 'react-admin';
import { FilterUserList } from "./FilterUserList";

export const UserList = props => (
    <List filters={<FilterUserList/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField label="Identificador" source="id" />
            <TextField label="Nombre de Usuario" source="user" />
            <TextField label="Rol" source="rol_id" />
            <TextField label="Estado" source="user_state_id" />
            <TextField label="Registro" source="people_id" />
        </Datagrid>
    </List>
);