import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Doacao.css'

const Doacao = () =>{
    return(
        <div id="page-doacao">
        <hr className="Linha"/>
        <Header title="Cadastro de Doação" />
        <form action="">
            <div className="form-row" style={{paddingLeft: '15px'}}>
                <div className="from-group col-md-1">
                    <label htmlFor="id">Id</label>
                    <input type="text" className="form-control" id="id"/>                    
                </div>                    
                
                <div className="form-group col-md-2">
                    <label htmlFor="dat">Data do evento</label>
                    <input type="date" className="form-control" id="dat"/>
                </div>                    
            </div>

            <div className="form-group row">
                <label className="tipo" htmlFor="tipo">Tipo de doação</label>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="alimento" />
                        <label className="form-check-label" for="gridCheck1">Alimentação</label>                        
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="maodeobra" />
                        <label className="form-check-label" for="gridCheck1">Mão de obra</label>                    
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="dinheiro" />
                        <label className="form-check-label" for="gridCheck1">Dinheiro</label>                        
                    </div>
                </div>
            </div>

            <div className="form-group col-md-6">
                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" className="form-control" cols="10" rows="5"></textarea>
            </div>

            <div className="botoes">
                <Link className="btn btn-primary" to="/listagem/doador">
                    Confirmar
                </Link>
                
                <Link className="btn btn-primary" to="/listagem/doador" >
                    Voltar
                </Link>                            
            </div>
        </form>
        <Footer />
    </div>
    )
}

export default Doacao