const Marcas = require('../models/Marcas');

class MarcaController{

  async index(req, res){
    const marcas = await Marcas.findAll();
    return res.json(marcas);
  }

  async store(req, res){
    try{
      const data = req.body
      const marcas = await Marcas.create(data)
      return res.json(marcas);

    }catch(err){
      res.status(400);
      res.json({
        message: "Erro ao gravar os registros"
      });
    }
  }

 
}

module.exports = MarcaController;