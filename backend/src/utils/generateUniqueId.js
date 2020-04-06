/**
* Gera o ID único com o tamanho de 4 bytes convertido para hexadecimal.
* No node.js usa-se module.exports no react export default
* Author: João Leno
* Data: 06/04/2020
*/
const crypto   = require('crypto');
module.exports = function generateUniqueId(){
    return   crypto.randomBytes(4).toString('HEX');
}