import sanyoLogo from '../assets/logo.svg'
import {Button}  from '../components/Button.jsx'

export function Login(){
    return(
        <>
            <main className='content-login'>
                <div>
                    <img src={sanyoLogo} className='logo' alt="React Logo" />
                </div>
                <div>
                    <label htmlFor="">Usuario</label>
                    <input type="text" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" />
                </div>
                

                <Button texto="Ingresar" variant="boton btn-primary"/>
                <Button texto="Registrarse" variant="boton btn-second"/>
            </main>
        </>
    );

}