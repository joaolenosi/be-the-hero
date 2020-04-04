/**
 * Para realizar as rotas no React Native é necessário instalar o pacote: react navigation
 * npm install @react-navigation/native
 * Navegação simples
 * npm install @react-navigation/stack
 * Author: João Leno
 * Date: 02/04/2020
 */

import React from 'react';
//Importando a biblíotca do react navigation
import { NavigationContainer } from '@react-navigation/native';
//Importando a biblíotca do react navigation astack. Essa navegação se dá através botões. 
import { createStackNavigator } from '@react-navigation/stack';
//Criando a navegação
const AppStack = createStackNavigator();
//Importando a minha rota de Incidentets
import Incidents from './pages/Incidents';
//Importando a minha rota de detalhes
import Detail from './pages/Detail';

export default function Routes() {
    return(
        //O navigationContainer tem que está por volta de todas as rotas
        <NavigationContainer>
           {/*AppStack.Navigator componente que vêm por volta das rotas. headerShown desabilita o cabeçalho das páginas*/}
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                 {/*AppStack.Screen cria uma rota para a página de incidents, toda rota de */}
                <AppStack.Screen name="Incidents" component={Incidents} />
                {/*AppStack.Screen cria uma rota para a página de Detail*/}
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>

    );
}