import React from 'react'
import {List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, Filter} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    button: {
        fontWeight: 'bold',
        '& svg': {
            color: 'orange'
        }
    }
})

const ButtonEdit = props => {
    const classes = useStyle()
    return <EditButton className={classes.button} {...props}/>
}

// Filtro
const CommentFilter = (props) => {
    return(
        <Filter {...props}>
            <TextInput label= "Buscar..." source="q" alwaysOn />
        </Filter>
    )
}

export const CommentsList = (props) => {

    return(
        <List {...props} filters={<CommentFilter />}>
            <Datagrid>
                <TextField source="email"/>
                <TextField source="name" />
                <TextField source="body" />
                <ButtonEdit />
            </Datagrid>
        </List>
    )
}

export const CommenstEdit = (props) => {
    return(
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="email" />
                <TextInput source="name" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    )
}