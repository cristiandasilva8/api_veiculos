const { Model, DataTypes } =  require('sequelize');

class Tipos extends Model{
  static init(sequelize){
    super.init({
      nome:DataTypes.STRING
    }, {
      sequelize
    })
  }

}

module.exports = Tipos;