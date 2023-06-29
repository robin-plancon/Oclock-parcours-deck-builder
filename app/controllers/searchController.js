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
};

module.exports = searchController;
