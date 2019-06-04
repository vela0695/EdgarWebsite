import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Pong from "./Pong.png";
import chasingTheEnd from "./chasingTheEnd.png";

function Projects() {
  return (
    <div>
      <h1 className="header">Projects</h1>
      <div>
        <Card style={{ maxWidth: "345px", margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Chasing the End"
              height="200"
              image={chasingTheEnd}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Chasing the End
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                2D Top down puzzle/adventure game developed in Unity. We have
                created 4 puzzle levels, where each player must explore the map
                in order to collect keys to open the door to advance to the next
                level. While doing this, the player must also avoid the 3
                different types of enemies on several parts of the map. Below, I
                have included a link to the project repository. The repo also
                includes a Readme file with instructions on how to access the
                code and build the game in Unity.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Visit Repo
            </Button>
          </CardActions>
        </Card>
        <Card style={{ maxWidth: "345px", margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Chasing the End"
              height="200"
              image={Pong}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pong
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                2D Pong game developed in C# and Unity. This is a single player
                pong game containing two paddles. One is controlled by the
                player using the up and down arrows while the other is
                controlled by the enemy IO. The game contains a simple menu
                screen with instructions on how to play the game and what the
                score limit is. Below the screenshots I have a button with a
                link to the repository to clone and build the game using Unity.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Visit Repo
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
