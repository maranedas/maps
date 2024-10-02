const router = require('express').Router();

//rutas
router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Bienvenido',
        pageDescription: 'Coyhaique Recicla'
    });
    
});

router.get('/mapa', (req, res) => {
    res.render('mapa', {
      pageTitle: 'Mapa',
      pageDescription: 'Visualización del mapa.'
    });
  });

module.exports = router;