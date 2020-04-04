/**
 * Para integrar o mobile ao back-end, é necessário instalar um cliente HTTP
 * para que possa realizar a chamada a nossa API.
 * o Package instalado foi: npm install axios
 * Como no celular não temos localhost, devemos digitar o endereço de IP que aparece quando executamos o projeto.
 * Então por meio axios tô criando uma API, que a partir do import dele, será possíver executar requisições HTTP.
 * Author: John Leno
 * Data: 03/04/2020
 * package: npm install axios 
 */

import axios from 'axios';
const api = axios.create({
    baseURL : 'http://10.0.0.102:3334' 
});

export default api;

