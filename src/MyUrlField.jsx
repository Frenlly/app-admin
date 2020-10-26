import * as React from "react";
import {makeStyles} from '@material-ui/styles'
import LaunchIcon from '@material-ui/icons/Launch';

const styles = makeStyles({
    link: {
        textDecoration: 'none'
    }, 
    icon: {
        width: '5px',
        height: '5px',
        paddingLeft: 2,
    }
})

const MyUrlField = ({ record = {}, source }) => {

    const clases = styles();
    return (
        <a href={record[source]} target="_blank" rel="noopener noreferrer" className = {clases.link}>
            {record[source]}
            <LaunchIcon className={clases.icon}/>
        </a>
    )
}
export default MyUrlField;