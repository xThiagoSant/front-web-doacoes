import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Listagem.css'

const Listagem = () =>{
    return(
        <div>
            <Header title="Listagem" />
            <hr/>
            <div id="page-listagem">
                <button style={{marginBottom: '10px'}} className="btn btn-primary btn-add">Adicionar</button>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Campos 1</th>
                            <th>Campos 2</th>
                            <th>Campos 3</th>
                            <th>Campos 4</th>
                            <th>Ações</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Campo 1</td>
                            <td>Campo 2</td>
                            <td>Campo 3</td>
                            <td>Campo 4</td>
                            <td>
                                <button className="btn btn-warning" style={{marginRight: '10px'}}>Editar</button>
                                <button className="btn btn-danger">Apagar</button>
                            </td>
                        </tr>   

                        <tr>
                            <td>Campo 1</td>
                            <td>Campo 2</td>
                            <td>Campo 3</td>
                            <td>Campo 4</td>
                            <td>
                                <button className="btn btn-warning" style={{marginRight: '10px'}}>Editar</button>
                                <button className="btn btn-danger">Apagar</button>
                            </td>
                        </tr>  
                        
                        <tr>
                            <td>Campo 1</td>
                            <td>Campo 2</td>
                            <td>Campo 3</td>
                            <td>Campo 4</td>
                            <td>
                                <button className="btn btn-warning" style={{marginRight: '10px'}}>Editar</button>
                                <button className="btn btn-danger">Apagar</button>
                            </td>
                        </tr>                          
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    )
}

export default Listagem
