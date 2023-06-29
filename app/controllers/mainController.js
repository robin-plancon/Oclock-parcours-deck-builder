const dataMapper = require('../dataMapper');

const mainController = {
  // méthode qui affiche la page d'accueil
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes',
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // méthode qui affiche le détail d'une carte
  cardPage: async (req, res) => {
    try {
      const { id } = req.params;
      const card = await dataMapper.getCardById(id);
      res.render('cardDetail', {
        card,
        title: card.name,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = mainController;
