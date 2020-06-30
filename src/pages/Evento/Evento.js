import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Evento.css'

const Evento = () =>{
    return(
        <div id="page-evento">
            <Header title="Cadastro de Eventos" />
            <form action="">
                <div className="form-row" style={{paddingLeft: '15px'}}>
                    <div className="from-group col-md-1">
                        <label htmlFor="id">Id</label>
                        <input type="text" className="form-control" id="id"/>                    
                    </div>                    

                    <div className="form-group col-md-6">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome"/>
                    </div>
                    
                    <div className="form-group col-md-2">
                        <label htmlFor="dat">Data do evento</label>
                        <input type="date" className="form-control" id="dat"/>
                    </div>                    
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" className="form-control" cols="10" rows="5"></textarea>
                </div>

                <div className="botoes">
                    <Link className=" links botao" to="#">
                        Confirmar
                    </Link>
                    
                    <Link className=" links botao" to="#" >
                        Voltar
                    </Link>                            
                </div>
            </form>

            <Footer />
        </div>
    )
}

export default Evento