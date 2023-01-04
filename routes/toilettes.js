const express = require("express")
const app = express()
const sequelize = require("sequelize")
const { Toilettes } = require("../models")

app.get("/", async (req, res) => {
  const { distance, latitude, longitude } = req.query

  const location = sequelize.literal(
    `ST_GeomFromText('POINT(${longitude} ${latitude})')`
  )

  const distanceCalcul = sequelize.fn(
    "ST_Distance_Sphere",
    sequelize.col("toilettes.position"),
    location
  )

  const toilettes = await Toilettes.findAll({
    where: {
      position: sequelize.where(distanceCalcul, {
        [sequelize.Op.lte]: distance,
      }),
    },
  })

  res.json(toilettes.length)
})

module.exports = app
