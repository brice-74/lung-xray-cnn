const express = require('express');
const router = express.Router();
const predict = require('./tf');

const Labels = ['Normal', 'Pneumonia']

router.get('/', (req, res) => {
  res.render('pages/index');
})

router.post('/', async (req, res) => {
  if(!req.files) {
    res.render('pages/index', {
      message: 'No file uploaded',
    });
    return 
  }else{
    predict(req.files['img-input']).then((pred) => {
      res.render('pages/index', {
        content: Labels[Math.round(pred[0])],
      });
    }) 
  }
})

module.exports = router;