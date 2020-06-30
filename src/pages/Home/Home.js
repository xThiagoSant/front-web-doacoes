import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { FiLogIn, FiLock } from 'react-icons/fi'
import './Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () =>{
    const [success, setSuccess] = useState(false)

    const Login = () =>{
        //Requisição axios para validar o login
        setSuccess(true)
    }

    if(success){
        return  <Redirect to='/listagem'/>
    }
    return (
        <section id='page-home' className='pagina'>
            <Header title='Voce é a esperança de alguém'/>
            <hr/>
            <div className='container'>
                <div className='dados'>
                    <div className='login dado'>
                        <h1>Entrar</h1>
                        <div><FiLogIn /> <input type="text"/></div>
                        <div><FiLock /> <input type="password" /></div>
                        <div><button onClick={Login} className="btn btn-primary">Entrar</button></div>
                        <div><Link className='linklog' to='#'>Esqueci minha senha.</Link></div>                        
                    </div>

                    <div className='registro dado'>
                        <h1>Cadastre-se</h1>
                        <p>
                            Cadastre agora mesmo e inicie seus eventos beneficentes, ajudando quem mais precisa.
                        </p>
                        <Link className='links botao linklog' to='/entidade'>Cadastrar</Link>
                    </div>            
                </div>
            </div> 
            <Footer />       
        </section>
    )
}

export default Home