/**
 * Um compnente no REACT é uma função que retorna HTML
 * Porém quando HTML está escrito dentro do JS, chamamos de JSX (JavaScript XML)
 * Author: João Leno
 * 31/03/2020
 */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'//npm install react-router-dom
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './styles.css'
import api from '../../Services/api'


function NewIncident(){

	//Armazena os valores dos inputs
	const [title,       setTitle] 		= useState('')
	const [description, setDescription] = useState('')
	const [value,       setValue] 		= useState('')

	//Obtém o ID da ONG logada
	const ongId = localStorage.getItem('ongId')

	//Para navegar entre as rotas
	const history = useHistory();

	async function handleNewIncident(e) {
		e.preventDefault()
		//Cria um objeto com os valores dos input dos formulários
		const data = {
		  title, description, value
		}
	
		try {
			//Realiza a chamada para a rota de incidents e passa como header o ID da ONG
		    await api.post('/incidents', data, {
				headers: {
					Authorization: ongId
				}
			})

			//Traça a rota para o perfil
		  	history.push('/profile')
		} catch (err) {
		  	console.log(err)
		  	alert('Error on creating incident')
		}
	  }
	
  


    return (
        <div className="new-incident-container">
        <div className="content">
           <section>
              <img src={logoImg} alt="Be The Hero"/>

              <h1>Cadastrar novo caso</h1>
              <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

              <Link className="back-link" to="/profile">
                 <FiArrowLeft size={16} />
                 Voltar para home
              </Link>            
           </section>

			<form onSubmit={handleNewIncident}>
				<input 
					placeholder="Incident Title" 
					value={title}
					onChange={ e => setTitle(e.target.value) }
				/>
				<textarea 
					placeholder="Description" 
					value={description}
					onChange={ e => setDescription(e.target.value) }
				/>
				<input 
					placeholder="Total Cost" 
					value={value}
					onChange={ e => setValue(e.target.value) }/>
				<button className="button" type="submit">Register</button>
			</form>
        </div>
     </div>
    )

}

export default NewIncident;  