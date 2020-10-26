import * as React from "react";
import {makeStyles} from '@material-ui/styles'
import LaunchIcon from '@material-ui/icons/Launch';

const styles = makeStyles({
    link: {
        textDecoration: 'none'
    }, 
    icon: {
        width: '0.5px',
        paddingLeft: 2,
    }
})

const MyUrlField = ({ record = {}, source }) =>
    <a href={record[source]} className = {styles.icon}>
        {record[source]}
        <LaunchIcon className={styles.icon}/>
    </a>;

export default MyUrlField;