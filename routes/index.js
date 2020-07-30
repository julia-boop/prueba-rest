var express = require('express');
var router = express.Router();
const db = require('../database/models');
const movieController = require('../controllers/movieController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/peliculas', movieController.all)

router.get('/pelicula/:idPelicula', function(req, res, next) {
  db.Peliculas.findByPk(req.params.idPelicula)
  .then(function(resultado) {
    res.send(resultado);
  })
})

router.get('/ratingMayorA8', function(req, res, next) {
  db.Peliculas.findAll({
    where: {
      // rating: {[db.Sequelize.Op.gt]: 8}
      title: {[db.Sequelize.Op.like]: "%" + req.query.search + "%"}
    }
  })
  .then(function(resultado) {
    res.send(resultado)
  })
})


module.exports = router;
