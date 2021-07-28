const { Model, DataTypes } =  require('sequelize');

class Marcas extends Model{
  static init(sequelize){
    super.init({
      nome:DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Marcas;