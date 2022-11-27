import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Badge from "@mui/material/Badge";

import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import { pink } from "@mui/material/colors";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://cdn.shopify.com/s/files/1/0494/8915/0116/files/Best_selling_houseplants.jpg?v=1649455701&width=710"
        // image="%PUBLIC_URL%/image/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" aria-label={notificationsLabel(100)}>
          <Badge badgeContent={50}>
            <InvertColorsIcon color="primary" />
          </Badge>
          Water Plant
        </IconButton>

        <IconButton size="small">
          <InvertColorsIcon sx={{ color: pink[500] }} />
          Stop Water Plant
        </IconButton>
      </CardActions>
    </Card>
  );
}
