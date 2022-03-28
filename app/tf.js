const tf = require('@tensorflow/tfjs-node');
const CONFIG = require('./config');

const Model = tf.loadLayersModel(CONFIG.TF.ModelPATH)

predict = async (img) => {
  const tfimage = tf.node.decodeImage(img.data, 1).resizeBilinear([224, 224])
  const expimg = tf.expandDims(tfimage, 0)

  return Model.then( async (m) => {
    return await m.predict(expimg).data()
  }) 
}

module.exports = predict