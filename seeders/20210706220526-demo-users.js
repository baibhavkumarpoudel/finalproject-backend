'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Ash Ketchum",
        username: "pokemaster",
        password:"pikachu",
        img: "http://pm1.narvii.com/5778/3283ff6c8c483700ded3a4e84e18b9cf7a37e816_00.jpg",
        bio: "I wanna be the very best..Like no one ever was!",
        pcardId: "Gold"
      },
      {
        name: "Gary Oak",
        username: "bestrival",
        password:"pallettown",
        img: "https://staticg.sportskeeda.com/editor/2021/04/7b475-16174618208764-800.jpg",
        bio: "I'm a pokemon researcher from Pallet Town and my grandpa is Professor Oak.",
        pcardId: "Silver"
      },
      {
        name: "Brock",
        username: "gymleader",
        password:"boulder",
        img: "http://pm1.narvii.com/5739/3a1d2c2cda1d0c144315a54c55e3bad1e26de39b_00.jpg",
        bio: "Beat me and you shall receive a Boulder Badge!",
        pcardId: "Bronze"
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
