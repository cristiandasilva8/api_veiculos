const { Model, DataTypes } =  require('sequelize');

class Potencias extends Model{
  static init(sequelize){
    super.init({
      descricao:DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.TipoPotencias, {foreignKey: 'tipo_potencias_id', as: 'tipo_potencias'});
  }

}

module.exports = Potencias;