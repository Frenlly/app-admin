import React from 'react'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
    flex_dos: {
        display: 'flex',
        justifyContent: 'space-between',
        '& div': {
            background: '#fff',
            width: '48%',
            minHeight: '250px',
            height: '100%',
            padding: '20px'
        }
    }
})

const Tabla = () => {
    const style = styles();
    return(
        <div className={style.flex_dos}>
            <div>
                <p>INFO HERE...</p>
            </div>
            <div>
                <p>INFO HERE...</p>
            </div>
        </div>
    )
}

export default Tabla