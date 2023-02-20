/*=============================
* Import des modules
*==============================*/

const express = require('express'); // Bibliothèque express
const router = express.Router();    // Bibliothèque router

const controller = require('../middelwares/controller');    // Module de gestion des requêtes
const searchHandler = require('../middelwares/searchHandler'); // Module de gestion de la barre de recherche


/*=============================
* Définitions des routes
*==============================*/

// Appelle toutes les routes à la suite via le middeware controller
router.get('/', controller.home);

router.get('/article/:id', controller.article);

router.get('/category/:name', controller.category);

router.post('/search', searchHandler);

/*=============================
* Export des routes
*==============================*/

module.exports = router;