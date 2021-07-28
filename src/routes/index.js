// Importação dos arquivo de rotas e controllers que irão ser utilizados
// Na Instrussão abaixo também, faz a desestruturação do arquivo Routes do espress
const { Router } = require('express');
// Armazena as funções do Routes do express em uma variavel
const route = Router();

const UsuarioController = require('../controllers/usuarioController');
const VeiculoController = require('../controllers/veiculoController');
const MarcaController = require('../controllers/marcaController');
const TipoController = require('../controllers/tipoController');
const TipoPotenciaController = require('../controllers/tipoPotenciaController');
const PotenciasController = require('../controllers/potenciaController')

const usuarioController = new UsuarioController();
const veciuloController = new VeiculoController();
const marcasController = new MarcaController();
const tiposController = new TipoController();
const tipoPotenciasController = new TipoPotenciaController();
const potenciaController = new PotenciasController();

route.route('/usuarios')
  .post(usuarioController.store)
  .get(usuarioController.index)

route.route('/veiculos')
  .get(veciuloController.index)
route.route('/veiculos/:tipos_id/:potencias_id/:marcas_id')
  .post(veciuloController.store)
  
route.route('/marcas')
  .post(marcasController.store)
  .get(marcasController.index)

route.route('/tipos')
  .post(tiposController.store)
  .get(tiposController.index)

route.route('/tipo_potencias')
  .post(tipoPotenciasController.store)
  .get(tipoPotenciasController.index)

route.route('/potencias')
  .get(potenciaController.index)
route.route('/potencias/:tipo_potencias_id')
  .post(potenciaController.store)

module.exports = route;