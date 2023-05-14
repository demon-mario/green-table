import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { favActions } from "../../store/favourite-slice";

const CardComp = ({ data }) => {
  const [favColor, setFavColor] = useState("");
  const dispatch = useDispatch();

  const favouriteClickHandler = (event) => {
    event.preventDefault();

    // console.log(data);
    if (favColor === "red") {
      setFavColor("");
      dispatch(favActions.removeFavourite());
    } else {
      // data.recipe["favourite"] = true;
      dispatch(favActions.addFavourite());
      setFavColor("red");
      // console.log("data", data);
    }

    // console.log("here...", favColor);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardHeader
        title={data.recipe.label}
        // title={data.name}
        // subheader="September 14, 2016"
        sx={{ height: "20%", p: 2 }}
      />

      <CardMedia
        component="img"
        height="194"
        image={data.recipe.image}
        // image={data.image}
        alt={data.recipe.label}
        // alt={data.name}
        sx={{ padding: "1px", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.recipe.label}
          {/* {data.name} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={favouriteClickHandler}
        >
          <FavoriteIcon sx={{ color: favColor }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComp;
