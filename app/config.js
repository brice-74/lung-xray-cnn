const dotenv = require("dotenv")
console.log(dotenv.config())

const CONFIG = {
  APP: {
    PORT: process.env.PORT,
    HOST: process.env.HOST
  },
  TF: {
    ModelPATH: process.env.ModelPATH
  }
}

module.exports = CONFIG