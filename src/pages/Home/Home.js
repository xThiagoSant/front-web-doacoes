import React from 'react'
import {Link} from 'react-router-dom'
import { FiLogIn, FiLock } from 'react-icons/fi'
import './Home.css'

const Home = () =>{
    return (
        <section id='page-home' className='pagina'>
            <div className='container'>
                <div className='dados'>
                    <div className='login dado'>
                        <h1>Entrar</h1>
                        <div><FiLogIn /> <input type="text"/></div>
                        <div><FiLock /> <input type="password" /></div>
                        <div><Link className='links linklog botao' to='/listagem'>Entrar</Link></div>                                                  
                        <div><Link className='linklog' to='#'>Esqueci minha senha.</Link></div>                        
                    </div>

                    <div className='registro dado'>
                        <h1>Cadastre-se</h1>
                        <p>
                            Cadastre agora mesmo e inicie seus eventos beneficentes, ajudando quem mais precisa.
                        </p>
                        <Link className='links botao' to='/entidade' >Cadastrar</Link>                        
                    </div>            
                </div>
            </div>        
        </section>
    )
}

export default Home