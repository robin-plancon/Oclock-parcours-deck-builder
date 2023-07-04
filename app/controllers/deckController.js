const dataMapper = require('../dataMapper');

const deckController = {
  deckPage: (req, res) => {
    if (!req.session.deck) {
      req.session.deck = [];
    }
    const { deck } = req.session;
    res.render('deck', { deck });
  },

  addCardToDeck: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!req.session.deck) {
      req.session.deck = [];
    }
    const { deck } = req.session;

    if (deck.length >= 5) {
      return res.redirect('/deck');
    }

    if (deck.find((card) => card.id === id)) {
      return res.redirect('/deck');
    }

    try {
      const card = await dataMapper.getCardById(id);
      deck.push(card);
    } catch (error) {
      return res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
    return res.redirect('/deck');
  },

  removeCardFromDeck: (req, res) => {
    const id = parseInt(req.params.id, 10);
    req.session.deck = req.session.deck.filter((card) => card.id !== id);
    res.redirect('/deck');
  },
};

module.exports = deckController;
