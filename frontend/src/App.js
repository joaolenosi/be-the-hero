//Importando o componente de estado
import React from 'react';

//Importando o aquivo de rotas. ATENÇÃO:
//O nome do componente devem ser em maiúsculo ("Routes"), caso contrário não funcionára.
import Routes from './routes'


import './global.css'

/**
 * Um compnente no REACT é uma função que retorna HTML
 * Porém quando HTML está escrito dentro do JS, chamamos de JSX (JavaScript XML)
 */

/**
 * Conceito de imutilidade: você nunca pode alterar uma variavel que está sendo manipulada de forma direta
 * por questões de performance, nós precisamos sobrepor a variável de estado que está sendo manipulada.
*/
function App() {
  

  return (
    //Chamamos o componente de rota.
   <Routes />
  );
}


/*function App() {
  return (
    //Importando o componente Header e passando como parâmetro o texto que iremos exibir
    <Header title="Semana OminiStack"/>
  );
}*/

export default App;
