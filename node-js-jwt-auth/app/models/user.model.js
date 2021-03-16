module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    descri: {
      type: Sequelize.STRING,
    },
    nom: {
      type: Sequelize.STRING
    },
    prenom: {
      type: Sequelize.STRING
    },
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
