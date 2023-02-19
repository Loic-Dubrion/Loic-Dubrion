/*=================================
* Middelware d'aguillage des routes'
*==================================*/

// Récupération des données
const articles = require('../data/articles.json');

// Création de mon objet controller
const controller = 

{
    home: (req, res, next) => {
        res.render('home', {articles});
        next();
    },

    article: (req, res, next) => {
        const id = req.params.id;
        const article = articles.find(article => article.title === id);

        article ? res.render('article', {article}) : res.status(404);
        next();
    },

    category: (req, res, next) => {
        const name = req.params.name;
        const category = articles.find(article => article.category === name);

        category ? res.render('category', {category, articles}) : res.status(404);
        next();
    },
}

// on oublie pas d'exporter
module.exports = controller;