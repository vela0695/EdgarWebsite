import React from "react";
import { Element } from "react-scroll";
import { projects } from "./data/data";
import Project from "./Project";
import Grid from "@material-ui/core/Grid";

function Projects() {
  return (
    <div>
      <Element name="projects">
        <h1 className="header">Projects</h1>
      </Element>
      <Grid
        container
        spacing={16}
        direction="row"
        alignItems="flex-start"
        justify="flex-start"
      >
        {projects.map(i => {
          return <Project key={i.id} proj={i} />;
        })}
      </Grid>
    </div>
  );
}
export default Projects;
