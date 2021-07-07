'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pcards', [
      {
        name: "Bulbasaur",
        history: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/EX4/EX4_EN_39.png",
        dateOfRelease: "January 9, 1999",
        userId: 1
      },
      {
        name: "Ivysaur",
        history: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/EX14/EX14_EN_35.png",
        dateOfRelease: "March 1, 2001",
        userId: 2
      },
      {
        name: "Venusaur",
        history: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/BW5/BW5_EN_3.png",
        dateOfRelease: "January 9, 1999",
        userId: 3
      },
      {
        name: "Charmander",
        history: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/DP7/DP7_EN_101.png",
        dateOfRelease: "February 24, 2000",
        userId: 4
      },
      {
        name: "Charmeleon",
        history: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_10.png",
        dateOfRelease: "February 24, 2000",
        userId: 5
      },
      {
        name: "Charizard",
        history: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_11.png",
        dateOfRelease: "September 15, 2002",
        userId: 6
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
