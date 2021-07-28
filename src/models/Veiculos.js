const { Model, DataTypes } =  require('sequelize');

class Veiculos extends Model{
  static init(sequelize){
    super.init({
      nome:DataTypes.STRING,
      modelo:DataTypes.STRING,
      ano_inicio:DataTypes.STRING,
      ano_fim:DataTypes.STRING,
      foto:DataTypes.TEXT
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.Tipos, {foreignKey: 'tipos_id', as: 'tipos'});
    this.belongsTo(models.Potencias, {foreignKey: 'potencias_id', as: 'potencias'});
    this.belongsTo(models.Marcas, {foreignKey: 'marcas_id', as: 'marcas'});
  }

}

module.exports = Veiculos;