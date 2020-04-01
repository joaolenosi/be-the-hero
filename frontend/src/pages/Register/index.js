//Importando o componente link para fazer o SPA (Simple page application). O Link evite que seja realizado um carregamento completo da página.
import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'


import logoImg from  '../../assets/logo.svg'
import './styles.css';
import api from '../../Services/api';


/* As funções que vão ser exportadas, precisam estar escrito com a primeira letra em maiúsculo*/
export default function Register(){

    /**
     * UseState recebe dois parâmetros:
     *  1 - Variavel que contém o valor propriamente dito
     *  2 - Método responsável por alterar o seu estado.
     *  E por default inicializamos essas variaveis com valor branco.
     *  A mediga que o evento onChange dos inputs é disparado as funções set, vão atualizado a variavel com  o novo valor.
     */
    const [name,     setName]     = useState('');
    const [email,    setEmail]    = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city,     setCity]     = useState('');
    const [uf,       setUf]       = useState('');

    //Realiza a navegação no JS quando não se pode colocar o link
    const history = useHistory()


    //Realiza o cadastro do usuário
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
       /**
       * Obtém a resposta da execução da rota.
       * Sempre que utizar o await, tem que colocar o async na função para fazer com que exiba a resposta, somente após a execução.
       */ 
      
       try {
            const response = await api.post('ongs',data);
            alert(`Seu ID de acesso: ${response.data.id} `);    
            //Redireciona para a rota do login
            history.push('/');
       } catch (error) {
        alert(`Sorry. Error: ${error} `);    
       }

       
       

    }






    return (
        <div className="register-content">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a pessoas encontrarem os casos da sua ONG.</p>
                    
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" /> Voltar para o Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
    
                    <input placeholder="Nome da ONG"  
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                        placeholder="Email" 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />
                    <div className="input-group">
                        <input 
                        placeholder="City" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        {/* As primeiras chaves é para informar que pe um JS e as outras é para ter acesso as propriedades do css */}
                        <input 
                        placeholder="UF" 
                        style={{ width: 80 }} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
