module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    judul: {
      type: Sequelize.STRING,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
    rilis: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};
