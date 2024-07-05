'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.changeColumn('items', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }),

  down() {},
};
