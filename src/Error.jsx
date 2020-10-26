import React from 'react'
import { makeStyles } from '@material-ui/styles'


const styles = makeStyles({
    error: {
        width: '80%',
        backgroundColor: '#FFA4A4',
        color: "#6f1818",
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '30px 0px',
        '& p': {
            margin: '0px',
        }
    }
})


const Error = ({mensaje}) => {
    const style = styles()
    return (
        <div className={style.error}>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error