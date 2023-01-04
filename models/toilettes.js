const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Toilettes = sequelize.define("toilettes", {
    addresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horaire: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrondissement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.GEOMETRY,
      allowNull: false,
    },
  })
  return Toilettes
}
