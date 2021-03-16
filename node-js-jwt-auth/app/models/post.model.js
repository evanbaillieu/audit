module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("poste", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Role;
};
