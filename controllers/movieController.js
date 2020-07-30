var express = require('express');
var router = express.Router();
const db = require('../database/models');

module.exports = {
    all : function(req, res, next) {
        // Raw query
        db.Sequelize.query('SELECT * FROM movies')
        .then(function(resultado) {
          res.render('peliculas', {
            peliculas: resultado[0]
          });
        })
        .catch(function(e) {
          res.send('Hubo un error al procesar este pedido. Intentalo nuevamente :(');
        })
      }
}