const TipoPotencias = require('../models/TipoPotencias');

class TipoPotenciaController{

  async index(req, res){
    const tiposPotencias = await TipoPotencias.findAll();
    return res.json(tiposPotencias);
  }

  async store(req, res){
    try{
      const data = req.body
      const tiposPotencias = await TipoPotencias.create(data)
      return res.json(tiposPotencias);

    }catch(err){
      res.status(400);
      res.json({
        message: "Erro ao gravar os registros"
      });
    }
  }
}

module.exports = TipoPotenciaController;