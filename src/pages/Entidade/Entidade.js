import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Entidade.css'

const Entidade = () => {
    return(
        <div>
            <Header title="Cadastro de Entidades" />
            <hr className="Linha"/>
            <form action="" className="container" >
                <div id="page-entidade">                    
                    <div className="linha-1 dado">
                        <label htmlFor="id">Id</label>
                        <input id="id" type="text" placeholder="id"/>

                        <label htmlFor="nome">Nome</label>
                        <input id="nome" type="text" placeholder="Nome completo"/>

                        <label htmlFor="tipo">Tipo</label>
                        <select id="tipo" name="tipo">
                            <option value="">Selecione</option>
                            <option value="">Doador</option>
                            <option value="">Organizador</option>
                        </select>
                    </div>
                    
                    <div className="linha-2 dado">
                        <label htmlFor="doc">Documentação</label>
                        <input className="doc" type="text" placeholder="CNPJ/CPF"/>

                        <label htmlFor="login">Login</label>
                        <input id="login" type="text" placeholder="Login"/>

                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="" id="senha" placeholder="Senha"/>
                    </div>                    

                    <div className="linha-3 dado">
                        <label htmlFor="endereco">Endereço</label>
                        <input id="endereco" type="text" placeholder="Endereço completo"/>
                    </div>                   

                    <div className="linha-4 dado">
                        <label htmlFor="whats">WhatsApp</label>
                        <input id="whats" className="fone" type="text" placeholder="WhatsApp"/>

                        <label htmlFor="telefone">Telefone</label>
                        <input id="telefone" className="fone" type="text" placeholder="Telefone"/>
                    </div>                    

                    <div className="linha-5 dado">
                        <textarea id="obs" cols="30" rows="10" placeholder="Observações"></textarea>
                    </div>
                    
                    <div className="linha-6 dado ">
                        <Link className=" links botao" to="#" >
                            Confirmar
                        </Link>
                        
                        <Link className=" links botao" to="#" >
                            Voltar
                        </Link>                            
                    </div>
                                
                </div> 
            </form>          

            <Footer />
        </div>
    )
}

export default Entidade