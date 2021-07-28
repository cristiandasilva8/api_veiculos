const Veiculos = require('../models/Veiculos');

class VeiculoController{

  async index(req, res){
    const veiculos = await Veiculos.findAll({
      include: [
        {association: 'marcas' },
        {association: 'tipos' },
        {association: 'potencias' },
      ]
    });
    return res.json(veiculos);
  }

  async store(req, res){
    try{
      const {nome, modelo, ano_inicio, ano_fim, foto} = req.body
      const { tipos_id, potencias_id, marcas_id } = req.params;

      const veiculos = await Veiculos.create({
        nome, 
        modelo, 
        ano_inicio, 
        ano_fim, 
        foto, 
        tipos_id,
        potencias_id,
        marcas_id
      })
      return res.json(veiculos);

    }catch(err){
      res.status(400);
      res.json({
        message: err
      });
    }
  }

 
}

module.exports = VeiculoController;