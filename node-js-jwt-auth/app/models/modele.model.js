module.exports = (sequelize, Sequelize) => {
    const Modele = sequelize.define("modele", {
      niveau: {
        type: Sequelize.INTEGER,
      },
      titre: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
    });
  
    return Modele;
  };
  