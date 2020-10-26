import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles'
import Error from './Error'
import logo from './img/0.png'

// icon
import SendIcon from '@material-ui/icons/Send'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import LockIcon from '@material-ui/icons/Lock'

const estilo = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
    },
    left: {
        background: 'linear-gradient(35deg, rgba(162,250,145,1) 35%, rgba(72,227,112,0.7))',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
        padding: '20px',
        '& h3': {
            fontSize: '40px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginTop: '0px',
        }
    },
    icon: {
        width: '200px',
        height: '200px',
        color: '#2e943b',
    },

    form: {
        width: '80%',
        '& input': {
            display: 'block',
            width: '100%',
            marginBottom: '40px',
            padding: '10px',
        }
    },

    input: {
        borderBottom: '3px solid #45d556',
        marginBottom: '40px',
        color: '#c3c3c3',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            '& input': {
                border: 'none',
                margin: '0px',
            },
            '& input:focus': {
                outline: 'none'
            }
        }
    },

    button: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '25px',
        backgroundColor: '#2e943b',
        padding: '5px',
        margin: 'auto',
        color: '#fff',
        '& .MuiSvgIcon-root': {
            marginRight: '15px',
        },
        '&:focus': {
            outline: 'none'
        }
    },
})

const MyLoginPage = ({ theme }) => {
    // dar estilos de material ui
    const styles = estilo(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        
        if(email.trim() === '' || password.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        login({ email, password }).catch( e =>(
            notify('Invalid email or password')
            )
        );
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <AssignmentIndIcon className={styles.icon}/>
            </div>

            <div className={styles.right}>
                <ThemeProvider theme={createMuiTheme(defaultTheme)}>

                    <img src={logo} alt="Logo iBan Online" className={styles.icon}/>
                    <h3>Bienvenido</h3>

                    {error ? <Error mensaje = "Los campos no deben estar vacios" /> : ''}
                    <form onSubmit={submit} className={styles.form}>
                        <div className={styles.input}>
                            <label htmlFor="email">Email</label>
                            <div>
                                <AssignmentIndIcon />
                                <input
                                    id = "email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Ej: example@example.com'
                                />
                            </div>
                        </div>
                        
                        <div className={styles.input}>
                            <label htmlFor="password">Password</label>
                            <div>
                                <LockIcon />
                                <input
                                    id = "password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Ej: ************'
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={styles.button}
                        >
                            <SendIcon /> Enviar
                        </button>
                    </form>
                    <Notification />
                </ThemeProvider>
            </div>
        </div>
    );
};

export default MyLoginPage;