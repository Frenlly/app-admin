import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Tabla from './tabla'

// icons
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import AttchMoneyIcon from '@material-ui/icons/AttachMoney'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'

const DashStyle = makeStyles( {
    reset: {
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#e9ecef',
        borderRadius: '0px',
        padding: '25px',
        minHeight: '100vh',
        height: '100%',
    },
    header: {
        padding: '0px',
        fontWeight: 100,
        '& h1, h2, p': {
            margin: '0px'
        }
    },
    body: {
        marginTop: '40px',
        '& section': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridColumnGap: '20px',
            marginBottom: '50px',
            '& div': {
                width: '100%',
                borderRadius: '5px',
                padding: '20px',
                minHeight: '100px',
                height: '100%',
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                color: '#fff',
                '& div.info, p': {
                    padding: '0px',
                    margin: '0px'
                },
                '& div.info': {
                    display: 'flex',
                    flexDirection: 'column',
                    '& h3': {
                        margin: '0px',
                        fontSize: '35px',
                        '& span': {
                            fontSize: '14px'
                        }
                    }
                }
            }
        },
    },
    card_uno: {
        backgroundColor: '#25a2b7',
    },
    card_dos: {
        backgroundColor: '#6f47be',
    },
    card_tres: {
        backgroundColor: '#da3849',
    },
    icon: {
        width: '30%',
        height: '100%',
        marginRight: '15px'
    }
})

export default () => {
    const style = DashStyle()

    return (
        <div className={style.reset}>
            <header className = { style.header }  >
                <h1> DashBoard Demo </h1>
                <p>Sub Titulo</p>
            </header>

            <body className={style.body}>
                <section>
                    <div className={style.card_uno}>
                       <AccessAlarmIcon className={style.icon} />
                       <div className="info">
                            <p>Servicions</p>
                            <h3>24:00:00 <span>H/D</span></h3>
                            <p>Año 2020</p>
                       </div>
                    </div>
                        
                    <div className={style.card_dos}>
                       <AttchMoneyIcon className={style.icon} />
                       <div className="info">
                            <p>Generar Ganancias hasta de</p>
                            <h3>RD$ 40,000<span>.00</span></h3>
                            <p>Año 2020</p>
                       </div>
                    </div>

                    <div className={style.card_tres}>
                        <EventAvailableIcon className={style.icon} />
                        <div className="info">
                            <p>Eventos</p>
                            <h3>7 Dias <span>a la semana</span></h3>
                            <p>Año 2020</p>
                        </div>
                    </div>
                </section>

                <Tabla />
            </body>
        </div>
    )
}