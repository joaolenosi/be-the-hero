//Pacote do react
import React from 'react';
//Pacote responsável por realizar as rotas na nossa aplicação.
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'
//Importando nosso componente do Login
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';


//Função responsável por realizar a rota da nossa aplicação
function Routes(){
    return (
        //Precisa estar por volta de tudo
        <BrowserRouter>
            {/*O Swithc garante que apenas uma rota seja executa por vez.*/}
            <Switch>
                {/*Minha primeira rota vai exibir a página de login*/}
                {/*Exact faz comm que a rota do login seja exibido, só se o caminho for exato.
                Essa estrategia é para evitar que atraphe as outras rotas
             */}
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register}/>
                <Route path="/profile"  component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}

export default  Routes;