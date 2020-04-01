
/**
 * Um compnente no REACT é uma função que retorna HTML
 * Porém quando HTML está escrito dentro do JS, chamamos de JSX (JavaScript XML)
 * Author: João Leno
 * 31/03/2020
 */
import React, { useState } from 'react'
//Importando o componente link para fazer o SPA (Simple page application). O Link evite que seja realizado um carregamento completo da página.
import { Link, useHistory } from 'react-router-dom';
import api from '../../Services/api'
//Importando o componente Feather icon. Dentro desse pacote, tem vários ícones da internet. npm install react-icons
import { FiLogIn } from 'react-icons/fi'

//Para fazer uso da imagem é necessário realizar o import
import logoImg   from  '../../assets/logo.svg' 
import heroesImg from  '../../assets/heroes.png'
import './styles.css'


function Logon(){


    const [id, setId ] = useState('')
    const history = useHistory()
  
    async function handleLogin(e) {
        e.preventDefault()
    
        try {
            //Chama minha rota para validar o login
            
            const response = await api.post('/session', { id })
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            console.log(response.data.name);
    
            history.push('/profile')
        } catch (err) {
            alert('Falha ao efetuar o login. Det: '+err)
        }
    }



    return (
        <div className="logon-container">
            <selection className="form">
                
                <img src={logoImg} alt="Be The Hero"/>
               
                <form onSubmit={handleLogin}>
                    <h1>Efetuar Login</h1>
                   
                     <input 
                        placeholder="Your ID" 
                        value={id}
                        onChange={ e => setId(e.target.value) }/>
                    <button className="button" type="submit">Entrar</button>                    
  
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" /> Inscrever-se no Be The Hero
                    </Link>
                </form>
            </selection>

            <img src={heroesImg} alt="Heroes" />         
            
        </div>
        
    )
}

export default Logon;