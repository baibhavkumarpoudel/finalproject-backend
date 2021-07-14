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
      },
      {
        name: "Squirtle",
        history: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/BW10/BW10_EN_14.png",
        dateOfRelease: "October 20, 1996",
        userId: 7
      },
      {
        name: "Wartortle",
        history: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/BW10/BW10_EN_15.png",
        dateOfRelease: "February 24, 2000",
        userId: 8
      },
      {
        name: "Blastoise",
        history: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/BW7/BW7_EN_31.png",
        dateOfRelease: "January 9, 1999",
        userId: 9
      },
      {
        name: "Caterpie",
        history: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_3.png",
        dateOfRelease: "October 20, 1996",
        userId: 10
      },
      {
        name: "Metapod",
        history: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_4.png",
        dateOfRelease: "February 24, 2000",
        userId: 11
      },
      {
        name: "Butterfree",
        history: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_3.png",
        dateOfRelease: "October 20, 1996",
        userId: 12
      },
      {
        name: "Pikachu",
        history: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XYP/XYP_EN_XY84.png",
        dateOfRelease: "September 7, 2018",
        userId: 13
      },
      {
        name: "Raichu",
        history: "Its long tail serves as a ground to protect itself from its own high-voltage power.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/EX4/EX4_EN_13.png",
        dateOfRelease: "January 9, 1999",
        userId: 14
      },
      {
        name: "Growlithe",
        history: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_17.png",
        dateOfRelease: "October 20, 1996",
        userId: 15
      },
      {
        name: "Arcanine",
        history: "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/DP3/DP3_EN_22.png",
        dateOfRelease: "October 20, 1996",
        userId: 16
      },
      {
        name: "Kangaskhan",
        history: "Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/SM11/SM11_EN_163.png",
        dateOfRelease: "February 24, 2000",
        userId: 17
      },
      {
        name: "Scyther",
        history: "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/BW7/BW7_EN_7.png",
        dateOfRelease: "September 15, 2002",
        userId: 18
      },
      {
        name: "Dratini",
        history: "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/SM1/SM1_EN_94.png",
        dateOfRelease: "October 20, 1996",
        userId: 19
      },
      {
        name: "Dragonair",
        history: "This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/SM11/SM11_EN_149.png",
        dateOfRelease: "October 20, 1996",
        userId: 20
      },
      {
        name: "Dragonite",
        history: "It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/SM1/SM1_EN_96.png",
        dateOfRelease: "October 20, 1996",
        userId: 21
      },
      {
        name: "Mewtwo",
        history: "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_51.png",
        dateOfRelease: "February 24, 2000",
        userId: 22
      },
      {
        name: "Mew",
        history: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
        img: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW98.png",
        dateOfRelease: "February 24, 2000",
        userId: 23
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
