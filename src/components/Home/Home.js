import React from "react";
import ImgMediaCard from "../../Image/ShowImageList";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <h1>List of Plants</h1>
      <p>Here is a list of plants</p>
      <Grid
        container
        item
        display="flex"
        justifyContent="center"
        // spacing={3}
        padding={3}
      >
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Grid>
    </div>
  );
};

export default Home;
