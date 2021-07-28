const Sequelize = require('sequelize');
const dbConfig  = require('../config');

const Usuarios = require('../models/Usuarios');
const Veiculos = require('../models/Veiculos');
const Tipos = require('../models/Tipos');
const Potencias = require('../models/Potencias');
const Marcas = require('../models/Marcas');
const TipoPotencias = require('../models/TipoPotencias');


const db = new Sequelize(dbConfig);

Usuarios.init(db);
Veiculos.init(db);
Tipos.init(db);
Potencias.init(db);
Marcas.init(db);
TipoPotencias.init(db);


Veiculos.associate(db.models)
Potencias.associate(db.models)

module.exports = db;
