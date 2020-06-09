export const projects = [
  {
    id: 1,
    title: "Custom Car Shop",
    detail:
      "Custom Car Shop is an e-commerce website that was designed to help my brother advertise and sell his custom cars as his sales continue to rise. This website is built using React and JavaScript. I also used Google’s Firebase storage to store all of the images and information about the cars. Netlify was the choice for deployment due to  many of the free services they currently offer. For example, my contact page is wired to Netlify’s back end in order to take advantage of their email service.",
    link: "https://scalemodelpolice.netlify.app/",
    image: "./data/images/carShop.png",
    button: "Website",
    disabled: false,
  },
  {
    id: 2,
    title: "Apex Stats Tracker",
    detail:
      "Apex Stats Tracker is an application developed with a Vue front-end node back-end. This app allows players who play Apex Legends to track their stats by entering their gamertag and the platform they play on (e.g. Xbox Live, PlayStation, Origin). If the information is valid, the app will show the player’s current stats. This application still has features that are currently being developed for example a much needed compare feature to see how players stack against others.",
    link: "https://apexstatsapp.herokuapp.com/",
    image: "./data/images/Apex.png",
    button: "Website",
    disabled: false,
  },
  {
    id: 3,
    title: "VGo Compiler",
    detail:
      "VGo is a compiler built in C that works for a subset of the GO language. The scanner and parser parts of this compiler are built using Flex and Bison. The semantic analysis of this compiler is done using hash tables to store information such as variables, types, scopes, etc. After the sematic analysis is done, intermediate three address code is generated. Finally, the intermediate code is then translated to X86 64 assembler code. ",
    link: "http://www2.cs.uidaho.edu/~jeffery/courses/445/vgo.html",
    image: "./data/images/compiler.jpeg",
    button: "Details",
    disabled: false,
  },
  {
    id: 4,
    title: "Chasing the End",
    detail:
      "2D Top down puzzle/adventure game developed in Unity. We have created 4 puzzle levels, where each player must explore the map in order to collect keys to open the door to advance to the next level. While doing this, the player must also avoid the 3 different types of enemies on several parts of the map. Below, I have included a link to the project repository. The repo also includes a Readme file with instructions on how to access the code and build the game in Unity.",
    link: "https://github.com/CS383-Dream-Team/Chasing-the-End",
    image: "./data/images/chasingTheEnd.png",
    button: "Repository",
    disabled: false,
  },

  {
    id: 5,
    title: "Biodiesel",
    detail:
      "My current senior project consists of building a game like applications that teaches the users how to create biodiesel. This application is built with React and JavaScript. The user goes through the steps of collecting oil and mixing all the chemicals to create the biodiesel. At the end of the game, the user will get a summary of the grade of biodiesel he just created plus what his profit or loss which is based on what he used to create it and its current market price.",
    link: "https://biodieseleducation.org/simulator/",
    image: "./data/images/Biodiesel.png",
    button: "Website",
    disabled: false,
  },
  {
    id: 6,
    title: "Monitoring City",
    detail:
      "Monitoring city dynamically analyzes Unicon programs to create a visual representation of time spent on each function. To do so it creates a building for every function in the program and its size is determine by the time spent on that function. When a function is active, the first floor of the building lights up. The user may navigate the city to see different parts of the program. Once the program exits, a list of all the functions and total time spent on each function is displayed.",
    link: "https://github.com/vela0695/Timing-Functions-City",
    image: "./data/images/monitoringCity.png",
    button: "Repository",
    disabled: false,
  },
  {
    id: 7,
    title: "Pong",
    detail:
      "2D Pong game developed in C# and Unity. This is a single player pong game containing two paddles. One is controlled by the player using the up and down arrows while the other is controlled by the enemy IO. The game contains a simple menu screen with instructions on how to play the game and what the score limit is. Below the screenshots I have a button with a link to the repository to clone and build the game using Unity.",
    link: "https://github.com/vela0695/Pong",
    image: "./data/images/Pong.png",
    button: "Repository",
    disabled: false,
  },
  {
    id: 8,
    title: "SEO Spider",
    detail:
      "SEO Spider is a Search Engine Optimizer. The front end composed of JavaScript and React consists of a search box where the user can enter the site he wishes to crawl. The backend composed of Python, crawls through all of the links and returns the metadata displayed on the table. This is a client project; thus all of the metadata has been requested by the client. My resposibilities have been setting up the initial server file and building out all of the front end.",
    link: "https://github.com/vela0695/Pong",
    image: "./data/images/SEOSpider.png",
    button: "Repository",
    disabled: true,
  },
];
