import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Project = ({ proj }) => {
  return (
    <Grid container item xs={12} md={6} lg={4} xl={3} spacing={0}>
      <Card className="cards">
        <CardMedia
          component="img"
          alt={proj.title}
          height="200"
          image={proj.image}
          title={proj.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {proj.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {proj.detail}
          </Typography>
        </CardContent>
        <Button
          size="small"
          color="primary"
          style={{ position: "static" }}
          onClick={() => window.open(proj.link)}
        >
          {proj.button}
        </Button>
      </Card>
    </Grid>
  );
};

export default Project;
