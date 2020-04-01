/**
 * Para integrar o front-end ao back-end, é necessário instalar um cliente HTTP
 * para poder realizar a chamada a nossa API.
 * o Package instalado foi o axios. 
 * Essa URL é do servidor do back-end http://localhost:3334
 * Então por meio axios tô criando uma API, que a partir do import dele, será possíver executar requisições HTTP.
 * Author: John Leno
 * Data: 01/04/2020
 * package: npm install axios
 */

import axios from 'axios';
const api = axios.create({
    baseURL : 'http://localhost:3334'
});

export default api;

