const database = require('./database');

const dataMapper = {
  // méthode qui récupère toutes les cartes
  async getAllCards() {
    const query = 'SELECT * FROM card';
    const result = await database.query(query);
    return result.rows;
  },

  // méthode qui récupère une carte par son id
  async getCardById(id) {
    const query = 'SELECT * FROM card WHERE id = $1';
    const result = await database.query(query, [id]);
    return result.rows[0];
  },

  // méthode qui récupère toutes les cartes d'un élément donné
  async getCardByElement(element) {
    if (element === 'null') {
      const query = 'SELECT * FROM card WHERE element IS NULL';
      const result = await database.query(query);
      return result.rows;
    }
    const query = 'SELECT * FROM card WHERE element = $1';
    const result = await database.query(query, [element]);
    return result.rows;
  },

  // méthode qui récupère toutes les cartes d'un niveau donné
  async getCardByLevel(level) {
    const query = 'SELECT * FROM card WHERE level = $1';
    const result = await database.query(query, [level]);
    return result.rows;
  },
};

module.exports = dataMapper;
