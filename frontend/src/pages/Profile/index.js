//useEffect, serve para disparar uma função em algum momento do componente.
//Por exemplo: Assim que a página carregar execute uma determinada ação.

import React, { useState, useEffect } from 'react'
import './styles.css'
//Pacote para realizar rotas. Redirecionamento
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../Services/api'

import logoImg from '../../assets/logo.svg'

function Profile(){

    //incidents nicializa com um array vázio, já que está sendo buscado um conjunto de informações do backend;
    //E a função que irá atualizar os incidents é a setIncidents 
    const [ incidents, setIncidents ] = useState([]);
    //Para realizar o redirecionamento da página
    const history = useHistory()

    //Obtém os dados da ONG logada
    const ongId   = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    //Se a ong não tiver dados armazenados localStorage, é por que ela está deslogada
    //Redireciona para a rota de login
    if (ongId === null)
       history.push('/');


    


    /*try {
        api.post('/session', { ongId }).then( 
               response => {
                 console.log('feed'+response.data.name)
               })
       
   } catch (err) {
       
       history.push('/');
   }*/

      

    /** 
     * A useEffect recebe dois parâmetros:
     * 1 - Qual função será executada. () => {}
     * 2 - Quando essa função for executada.  []
     *      O segundo parâmetro é um array de dependências, ou seja, toda vez que as informações do array mudarem
     *      será executado a função do primeiro parâmetro.
     * Exemplo de passagem useEffect( () => {}, []  );
     */
    useEffect( () => {
          
        /**
         * Obtendo os casos cadastrados para essa ONG.
         * O componente api, possui a base da nossa url: localhost que é concatenado com o restante da URL;
         * A requisição ficando dessa forma: http://localhost:3334/profile
         * Nessa rota temos que passar no Header da requisição, o ID da ONG que está logada.
         * Criamos no header um parâmetro chamado: Authorization
         * Após essa requisição ser realizada, teremos como retorno um JSON com todos os incidents desse ID que foi passado
         * no authorization. 
         * Porém para garantir, que só iremos ler o resultado dela, após a requisição ser concluída, criremos uma promise(then)
         * que gerantirá que a função de leitura, só ocorra após a requisição ter sido finalizada. 
         * Ao invés do promise, poderia usar um async na função api.get e na leitura da resposta um await
         * 
         * 
         */
            api.get('profile',{
                headers:{
                    Authorization: ongId,
                }

            }) .then(response => {
                setIncidents(response.data);//Atualiza os incidents
            })//Obtendo o retorno da resquisição

         } , 
         //toda variavel que se usa dentro do useEffect, ela deve ser adicionada como dependência,
         //Por que, se caso o valor de ongId seja alterada, será executada uma nova requisição atualizando
         //Os incidenets pertinente aquela ong
         [ongId] );

         async function handleDeleteIncident(id) {
            try {
              
                await api.delete(`incidents/${id}`, {
                    headers: {
                    Authorization: ongId
                    }
                });
                //Realiza um filtro e todos os incidentes que tenho, e para cada incident, vou manter apenas
                //O incidente que tiver o id diferent do que foi excluído.
                setIncidents(incidents.filter(incident => incident.id !== id))
            } catch (err) {
              alert('Error deleting incident')
            }
        }
        
        function handleLogout() {
            localStorage.removeItem('ongId')
            localStorage.removeItem('ongName')
            //Redireciona para a rota de login.
            history.push('/')
        }



  return (
      <div className="profile-container">
          <header>
              <img src={logoImg} alt="Be The Hero"/>
              <span>Bem vindo, {ongName}</span>
                {/*Cria uma rota para cadastrar um novo incidente. Lembrando que todo componente tem que ser em maiusculo*/}
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button"  onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
              
          </header>
          <h1>Casos cadastrados</h1>
          <ul>
              {/*Percorrendo o meu array com todos os incidents que foram retornadas na consulta.
              Para cada incident que tiver, será escrito um li contendo as informações.
              Quando se usa a função map para percorrer os elementos é necesário informar uma propriedade key
              para o primeiro elemento.
              Exemplo de retorno:
                {
                    "id": 1,
                    "title": "caso 1",
                    "description": "Detalhes do caso 1",
                    "value": "234",
                    "ong_id": "76daccdd"
                },
              */}
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>Incident:</strong>
                    <p>{incident.title}</p>

                    <strong>Description:</strong>
                    <p>{incident.description}</p>

                    <strong>Amount:</strong>
                    {/*Intl é uma classe do JS, que serve para formatar valores.*/}
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                    
                    {/*Para passar um parâmetro dentro de uma função é necessário criar uma arrow function antes
                    da função, caso contrário, ao invés de ser passado o parâmetro, será passado o retorno 
                    de uma função, ou seja, será passado o resultado da execução da função
                    */}
                    <button type="button" onClick={ () => handleDeleteIncident(incident.id)}>
                    <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
      </div>
  )
}
export default Profile;