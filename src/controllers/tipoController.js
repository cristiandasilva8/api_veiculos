const Tipos = require('../models/Tipos');

class TipoController{

  async index(req, res){
    const tipos = await Tipos.findAll();
    return res.json(tipos);
  }

  async store(req, res){
    try{
      const data = req.body
      const tipos = await Tipos.create(data)
      return res.json(tipos);

    }catch(err){
      res.status(400);
      res.json({
        message: "Erro ao gravar os registros"
      });
    }
  }

 
}

module.exports = TipoController;