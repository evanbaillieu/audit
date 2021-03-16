module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      nom: {
        type: Sequelize.STRING
      }     
    });
  
    return Section;
  };
  