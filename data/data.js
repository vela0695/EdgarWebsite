export const projects = [
  {
    id: 1,
    title: "Custom Car Shop",
    detail:
      "Custom Car Shop is an e-commerce website that was designed to help my brother advertise and sell his custom cars as his sales continue to rise. This website is built using React and JavaScript. I also used Google’s Firebase storage to store all of the images and information about the cars. Netlify was the choice for deployment due to  many of the free services they currently offer. For example, my contact page is wired to Netlify’s back end in order to take advantage of their email service.",
    link: "https://ronaldo2015-shop.netlify.com/",
    image: "./data/images/carShop.png"
  },
  {
    id: 2,
    title: "Chasing the End",
    detail:
      "2D Top down puzzle/adventure game developed in Unity. We have created 4 puzzle levels, where each player must explore the map in order to collect keys to open the door to advance to the next level. While doing this, the player must also avoid the 3 different types of enemies on several parts of the map. Below, I have included a link to the project repository. The repo also includes a Readme file with instructions on how to access the code and build the game in Unity.",
    link: "https://github.com/CS383-Dream-Team/Chasing-the-End",
    image: "./data/images/chasingTheEnd.png"
  },

  {
    id: 3,
    title: "Biodiesel",
    detail:
      "My current senior project consists of building a game like applications that teaches the users how to create biodiesel. This application is built with React and JavaScript. The user goes through the steps of collecting oil and mixing all the chemicals to create the biodiesel. At the end of the game, the user will get a summary of the grade of biodiesel he just created plus what his profit or loss which is based on what he used to create it and its current market price.",
    link: "https://biodieseleducation.org/simulator/",
    image: "./data/images/Biodiesel.png"
  },
  {
    id: 4,
    title: "Pong",
    detail:
      "2D Pong game developed in C# and Unity. This is a single player pong game containing two paddles. One is controlled by the player using the up and down arrows while the other is controlled by the enemy IO. The game contains a simple menu screen with instructions on how to play the game and what the score limit is. Below the screenshots I have a button with a link to the repository to clone and build the game using Unity.",
    link: "https://github.com/vela0695/Pong",
    image: "./data/images/Pong.png"
  },
  {
    id: 5,
    title: "Monitoring City",
    detail:
      "Built using Unicon, Monitoring city takes as input a Unicon program and a .dat file. With this information Monitoring City can create a building for every function in the program. During run-time it keeps track of the time spent in each function and shows that by having the buildings grow. The base of the building also lights up white whenever that function is active. The more times that function gets called the brighter the white gets. The buildings are also divided by user defined functions and Unicon functions. The user can move around the city as the building are growing and the functions are being called. Once the program exits, a list of all the functions and total time spent on each function is logged in the console for the user.",
    link: "https://github.com/vela0695/Timing-Functions-City",
    image: "./data/images/monitoringCity.png"
  }
];
