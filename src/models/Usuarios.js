const { Model, DataTypes } =  require('sequelize');

class Usuarios extends Model{
  static init(sequelize){
    super.init({
      nome:DataTypes.STRING,
      email:DataTypes.STRING,
      senha:DataTypes.STRING
    }, {
      sequelize
    })
  }
  static associate(models){
    this.hasMany(models.Veiculo, {foreignKey: 'marca_id', as: 'marca_veiculo'});
  }
}

module.exports = Usuarios;