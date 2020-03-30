
exports.up = function(knex) {
    //O método up, ele é responsável pela a criação da migration
    //Cria a tabela no banco, o primeiro parâmetro é a tabela e o segundo é a prórpia table
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();

    });
};

exports.down = function(knex) {
    //O méotodo down, ele é serve para caso dê algum problema na criação da minha table, então ele desfaz.
    return knex.schema.dropTable('ongs');
  
};
