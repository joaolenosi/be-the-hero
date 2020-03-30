
exports.up = function(knex) {

        //O método up, ele é responsável pela a criação da migrationzn
    //Cria a tabela no banco, o primeiro parâmetro é a tabela e o segundo é a prórpia table
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();
        
        //Criando a chave estrangeira ong_id, referente ao campo id na table ongs
        table.foreign('ong_id').references('id').inTable('ongs');

    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
