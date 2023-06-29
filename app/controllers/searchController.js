const dataMapper = require('../dataMapper');

const searchController = {
  // méthode qui affiche la page de recherche
  searchPage: (req, res) => {
    res.render('search');
  },

  // méthode qui récupère les cartes d'un élément donné
  searchByElement: async (req, res) => {
    const { element } = req.query;
    try {
      const cards = await dataMapper.getCardByElement(element);
      res.render('cardList', {
        cards,
        title: `Cartes de type ${element}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // méthode qui récupère les cartes d'un niveau donné
  searchByLevel: async (req, res) => {
    const { level } = req.query;
    try {
      const cards = await dataMapper.getCardByLevel(level);
      res.render('cardList', {
        cards,
        title: `Cartes de niveau ${level}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // méthode qui récupère les cartes d'une valeur donnée dans une direction donnée
  searchByValue: async (req, res) => {
    const { value, direction } = req.query;
    try {
      const cards = await dataMapper.getCardByValue(value, direction);
      res.render('cardList', {
        cards,
        title: `Cartes de valeur ${value} ou plus dans la direction ${direction}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // méthode qui récupère les cartes dont le nom contient une chaîne de caractères donnée
  searchByName: async (req, res) => {
    const { name } = req.query;
    try {
      const cards = await dataMapper.getCardByName(name);
      res.render('cardList', {
        cards,
        title: `Cartes dont le nom contient ${name}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = searchController;
