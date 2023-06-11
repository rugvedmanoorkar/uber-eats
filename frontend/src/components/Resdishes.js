import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

function Resdishes({ id, dname, des, ing, imageKey, price, func }) {
  const [dishes, setDishes] = useState([]);
  const history = useHistory();
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  });
  return (
    <div className="dishcard" sx={{ display: "flex" }}>
      <Card class Name="root" sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff"
            }}
          >
            <Grid
              container
              spacing={2}
              // onClick={() => {
              //   toggle();
              //   setdish({ dname, des, ing, imageKey, price });
              // }}
            >
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img
                    alt="complex"
                    src={`/imageRestaurant/api/images/${imageKey}`}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {dname}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Ingredients
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {ing}
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    ${price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          {/* <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {dname}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <br />
              Ingredients:{ing}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            {price}
          </Box> */}
        </Box>
        {/* {imageKey && (
          <CardMedia
            className="media"
            component="img"
            sx={{ maxWidth: 151 }}
            image={`/imageRestaurant/api/images/${imageKey}`}
            alt="Live from space album cover"
          />
        )} */}
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              localStorage.setItem("dishId", JSON.stringify(id));
              history.push(`/editdish/${id}`);
            }}
          >
            Edit
          </Button>
          <Button variant="outlined" size="small" onClick={() => func(id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Resdishes;
