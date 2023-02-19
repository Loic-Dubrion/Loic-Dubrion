/*=============================
* Import des modules
*==============================*/

// Les bibliothèques
const express = require('express');
const bodyParser = require('body-parser'); 

// Les modules perso
const router = require('./routes/router');
const errorHandler = require('./middelwares/errorHandler');


/*=============================
* Configuration d'express
*==============================*/

// initalisation d'express et gestion du port
const app = express();
const port = 1664;

// Configuration du moteur de template
app.set('view engine', 'ejs');

// Configuration des views
app.set('views', './views');

// Gestion des fichiers statics
app.use(express.static('public'));

// Gestion de la barre de recherche
app.use(bodyParser.urlencoded({ extended: false })); // PM: true permet également de gérer les données "complexes"


/*=============================
* Définitions des routes
*==============================*/

// Entrée de la route (renvoi au fichier routes/router.js)
app.use(router); 

// Fin de la route - Gestion des erreurs
app.use(errorHandler);


/*=============================
* Activation du serveur
*==============================*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));