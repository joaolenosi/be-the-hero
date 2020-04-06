/**
* Testa a geração do ID único com o tamanho de 4 bytes convertido para hexadecimal.
* Author: João Leno
* Data: 06/04/2020
* 1 - Param: Label do teste
* 2 - Param: Recebe uma arrow function, com a descrição do que ele deve retornar.
    - E dentro da função it, é passado uma outra arrow function
    - dentro dele é testado com a função expect e tobe checa se o teste passou 
*/
const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Generate Unique ID', () =>{
    it('should generate an unique ID', () => {
       /// expect(2 + 2).toBe(4);
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
})