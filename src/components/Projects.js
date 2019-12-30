import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Pong from "./images/Pong.png";
import chasingTheEnd from "./images/chasingTheEnd.png";
import Biodiesel from "./images/Biodiesel.png";
import Movie from "./images/Movie.png";
import { Element } from "react-scroll";

function Projects() {
  return (
    <div>
      <Element name="projects">
        <h1 className="header">Projects</h1>
      </Element>
      <div className="projectSection">
        <Card className="cards">
          <CardMedia
            component="img"
            alt="Chasing the End"
            height="200"
            image={chasingTheEnd}
            title="Chasing the End"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chasing the End
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              2D Top down puzzle/adventure game developed in Unity. We have
              created 4 puzzle levels, where each player must explore the map in
              order to collect keys to open the door to advance to the next
              level. While doing this, the player must also avoid the 3
              different types of enemies on several parts of the map. Below, I
              have included a link to the project repository. The repo also
              includes a Readme file with instructions on how to access the code
              and build the game in Unity.
            </Typography>
          </CardContent>
          <Button
            size="small"
            color="primary"
            style={{ position: "static" }}
            onClick={() =>
              window.open("https://github.com/CS383-Dream-Team/Chasing-the-End")
            }
          >
            Repository
          </Button>
        </Card>

        <Card className="cards">
          <CardMedia
            component="img"
            alt="Pong"
            height="200"
            image={Pong}
            title="Pong"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pong
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              2D Pong game developed in C# and Unity. This is a single player
              pong game containing two paddles. One is controlled by the player
              using the up and down arrows while the other is controlled by the
              enemy IO. The game contains a simple menu screen with instructions
              on how to play the game and what the score limit is. Below the
              screenshots I have a button with a link to the repository to clone
              and build the game using Unity.
            </Typography>
          </CardContent>
          <Button
            size="small"
            color="primary"
            style={{ position: "static" }}
            onClick={() => window.open("https://github.com/vela0695/Pong")}
          >
            Repository
          </Button>
        </Card>

        <Card className="cards">
          <CardMedia
            component="img"
            alt="Biodiesel"
            height="200"
            image={Biodiesel}
            title="Biodiesel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Biodiesel
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              My current senior project consists of building a game like
              applications that teaches the users how to create biodiesel. This
              application is built with React and JavaScript. The user goes
              through the steps of collecting oil and mixing all the chemicals
              to create the biodiesel. At the end of the game, the user will get
              a summary of the grade of biodiesel he just created plus what his
              profit or loss which is based on what he used to create it and its
              current market price.
            </Typography>
          </CardContent>
          <Button
            size="small"
            color="primary"
            style={{ position: "static" }}
            onClick={() =>
              window.open("https://biodieseleducation.org/simulator/")
            }
          >
            Website
          </Button>
        </Card>

        <Card className="cards">
          <CardMedia
            component="img"
            alt="Movie DB"
            height="200"
            image={Movie}
            title="Movie DB"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Movie DB
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Movie DB is a simple react application that uses a movies DB API
              to obtain json object when searching. This was a simple
              application that was used to learn how create-react-app worked and
              tried to implement a search functionality. The application will
              continue to grow and I plan to incorporate a database to it to
              expand my knowledge on databases and queries.
            </Typography>
          </CardContent>
          <Button
            size="small"
            color="primary"
            style={{ position: "static" }}
            onClick={() => window.open("https://github.com/vela0695/MovieDB")}
          >
            Repository
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Projects;
