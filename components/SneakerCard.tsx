import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./../styles/components/SneakerCard.scss";

type Sneakers = {
  id: number;
  name: string;
  image: string;
};

type SneakersArr = {
  sneakers: Sneakers[];
};

const SneakerCard = ({ sneakers }: SneakersArr) => {
  return (
    <div className="sneakers-container">
      {sneakers.map((item: Sneakers) => (
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

export default SneakerCard;
