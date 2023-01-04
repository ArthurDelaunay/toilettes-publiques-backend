const express = require("express")
const cors = require("cors")
const toilettesRoutes = require("./routes/toilettes")
require("dotenv").config()
require("./models")

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/toilettes", toilettesRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
