'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pcards', [
      {
        name: "",
        history: "",
        img: "",
        dateOfRelease: "",
        userId: ""
      },
      {
        name: "",
        history: "",
        img: "",
        dateOfRelease: "",
        userId: ""
      },
      {
        name: "",
        history: "",
        img: "",
        dateOfRelease: "",
        userId: ""
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
