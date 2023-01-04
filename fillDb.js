require("./models")
const { Toilettes } = require("./models")

const datas = require("./sanisettesparis.json")

const sendRequest = async () => {
  await Toilettes.destroy({ where: {} })
  const promises = datas.map(async (data) => {
    const point = {
      type: "Point",
      coordinates: [data.fields.geo_point_2d[1], data.fields.geo_point_2d[0]],
    }
    const newToilette = await Toilettes.create({
      addresse: data?.fields?.adresse || "not define",
      horaire: data?.fields?.horaire || "not define",
      arrondissement: data?.fields?.arrondissement || "not define",
      position: point,
    })
    return newToilette
  })

  const allPromise = Promise.all(promises)

  try {
    await allPromise
    console.log("ok")
  } catch (error) {
    console.log(error)
  }
}

sendRequest()
