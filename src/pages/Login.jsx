import sanyoLogo from '../assets/logo.svg'
import {Button}  from '../components/Button.jsx'

export function Login(){
    return(
        <>
            <main className='login-content'>
                <div>
                    <img src={sanyoLogo} className='logo' alt="React Logo" />
                </div>
                <form className='login-form'>
                    <input className='login-input' type="text"  placeholder='Usuario'/>
                    <input className='login-input'type="password" placeholder='Contraseña'/>
                    <Button texto="Ingresar" variant="boton btn-primary"/>
                    <Button texto="Registrarse" variant="boton btn-second"/>
                </form>
            </main>
        </>
    );

}