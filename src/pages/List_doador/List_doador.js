import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './List_doador.css'

const Listagem = () =>{
    const [logout, setLogout] = useState(false)

    const deslogar = () =>{
        alert('Seu acesso foi encerrado.')
        setLogout(true)
    }

    if(logout){
        return <Redirect to='/' />
    }
    return(
        <div>
            <Header title={'Voce é a esperança de alguém - D'} />
            <hr className="Linha"/>
            <div id="page-listagem">
                <Link style={{marginBottom: '10px'}} to="/doacao" className="btn btn-primary btn-add">Adicionar</Link>
                <Link style={{marginBottom: '10px'}} to="/entidade/1" className="btn btn-primary btn-add">Seus Dados</Link>
                <Link onClick={deslogar} style={{marginBottom: '10px'}} to="#" className="btn btn-primary btn-add">Sair</Link>
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
                                <Link className="btn btn-warning" to="/doacao/1" style={{marginRight: '10px'}}>Editar</Link>
                                <Link className="btn btn-danger" to="#">Apagar</Link>
                            </td>
                        </tr>   

                        <tr>
                            <td>Campo 1</td>
                            <td>Campo 2</td>
                            <td>Campo 3</td>
                            <td>Campo 4</td>
                            <td>
                                <Link className="btn btn-warning" to="/doacao/1" style={{marginRight: '10px'}}>Editar</Link>
                                <Link className="btn btn-danger" to="#">Apagar</Link>
                            </td>
                        </tr>  
                        
                        <tr>
                            <td>Campo 1</td>
                            <td>Campo 2</td>
                            <td>Campo 3</td>
                            <td>Campo 4</td>
                            <td>
                                <Link className="btn btn-warning" to="/doacao/1"style={{marginRight: '10px'}}>Editar</Link>
                                <Link className="btn btn-danger" to="#">Apagar</Link>
                            </td>
                        </tr>                          
                    </tbody>
                </table>
            </div>
            <hr/>
            <Footer />
        </div>
    )
}

export default Listagem
