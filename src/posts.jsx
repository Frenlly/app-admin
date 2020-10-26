import React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, SimpleList } from 'react-admin';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { Create } from 'react-admin';
import {Filter} from 'react-admin'
import { useMediaQuery } from '@material-ui/core';


const PostFilter = props => {
    return(
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    )
}

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} filters = {<PostFilter />}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

const PostTitle = ({ record }) => {
    return <span>Post - Editar Usuario</span>;
};

export const PostEdit = props => {
    return(
        <Edit {...props} title = {<PostTitle />}>
            <SimpleForm className="uno">
                <TextInput disabled source="id" />
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    )
}

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);