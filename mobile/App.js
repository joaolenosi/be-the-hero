
//Importando a bibleoteca intl aqui no App.js para ela ficar visível em toda aplicação.
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Routes from './src/routes'

export default function App() {
  return (
    <Routes></Routes>
  );
}
