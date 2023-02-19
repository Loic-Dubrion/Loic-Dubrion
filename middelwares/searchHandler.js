/*=================================
* Middelware Gestion des recherches
*==================================*/

// Importer les modules nécessaires
const bodyParser = require('body-parser');
const articles = require('../data/articles.json');

// Définir une route pour la recherche POST
module.exports = (req, res) => {

  const query = req.body.searchBar.toLowerCase(); // Récupérer la valeur du champ de recherche et convertir en minuscules
  
  const results = articles.filter(article => {

    const match = article.title.toLowerCase(); // Récupérer la valeur du champ

    return match.includes(query); // Renvoyer true si le champ inclut la recherche, false sinon
  });

  results.length > 0 ? res.render('search', {results, query}) : res.render('errors/noResult', {query}); 

};
