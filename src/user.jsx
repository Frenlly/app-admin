import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField, Filter, TextInput} from 'react-admin';
import MyUrlField from './MyUrlField'


const UserTitle = ()=> {
    return <span>Titulo usuario</span>
}

const UserSearch = (props) => {
    return(
        <Filter {...props}>
            <TextInput label="Buscar..." source="q" alwaysOn/>
        </Filter>
    )
}

export const UserList = props => {
    return(
        <List {...props} title = {<UserTitle />} filters={<UserSearch />}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.city" />
                <TextField source="phone" />
                <TextField source="website" />
                <UrlField source = "website" />
                <TextField source="company.name" />
                <MyUrlField source = "website" />
            </Datagrid>
        </List>
    )
};