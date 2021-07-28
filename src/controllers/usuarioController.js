const Usuarios = require('../models/Usuarios');

class UsuarioController{

  async index(req, res){
    const usuarios = await Usuarios.findAll();
    return res.json(usuarios);
  }

  async store(req, res){
    try{
      
      const data = req.body

      const usuarios = await Usuarios.create(data)
      return res.json(usuarios);

    }catch(err){
      res.status(400);
      res.json({
        message: "Erro ao gravar os registros"
      });
    }
  }

 
}

module.exports = UsuarioController;