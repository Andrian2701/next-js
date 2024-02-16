import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./../styles/SneakerCard.scss";

type Sneaker = {
  id: number;
  name: string;
  image: string;
};

type Sneakers = {
  sneakers: Sneaker[];
};

const SneakersCard = ({ sneakers }: Sneakers) => {
  return (
    <div className="sneakers-container">
      {sneakers.map((item) => (
        <>
          <Card className="sneaker-card" key={item.id}>
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography>{item.name}</Typography>
            </CardContent>
          </Card>
        </>
      ))}
    </div>
  );
};

export default SneakersCard;
