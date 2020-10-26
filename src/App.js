import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './user'
import {PostList, PostEdit, PostCreate} from './posts'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat'
import Dashboard from './dashboard';
import { CommentsList, CommenstEdit } from './Comments'
import authProvider  from './authProvider';
import MyLoginPage from './MyLoginPage'
import MyLogoutButton from './MyLogoutButton'
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');




const App = () => {

  return (
    <Admin 
      dataProvider={dataProvider}
      dashboard = {Dashboard}
      authProvider = {authProvider}
      loginPage={MyLoginPage} 
      logoutButton={MyLogoutButton}
      // theme={theme}
    >
      
        <Resource 
          name = "posts" 
          list = {PostList} 
          edit={PostEdit}  
          create={PostCreate}
          icon = {PostIcon}
        />

        <Resource 
          name = "users" 
          list = {UserList} 
          icon = {UserIcon}
        />

        <Resource 
          name = "comments"
          list = {CommentsList}
          edit = {CommenstEdit}
          icon = {ChatIcon}
        />
    </Admin>
  )
};

export default App;