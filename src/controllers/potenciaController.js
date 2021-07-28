const Potencias = require('../models/Potencias');

class PotenciaController{

  async index(req, res){
    const potencias = await Potencias.findAll({
      include: [
        {association: 'tipo_potencias' },
      ]
    });
    return res.json(potencias);
  }

  async store(req, res){
    try{
      const {descricao} = req.body
      const { tipo_potencias_id } = req.params;

      const potencias = await Potencias.create({
        descricao,
        tipo_potencias_id
      })
      return res.json(potencias);

    }catch(err){
      res.status(400);
      res.json({
        message: err
      });
    }
  }

 
}

module.exports = PotenciaController;