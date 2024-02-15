import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { getSneakers } from "@/pages/api/data/api";
import "./../styles/SneakerCard.scss";

type Sneakers = {
  id: number;
  name: string;
  image: string;
};

const SneakersCard = async () => {
  const sneakers = await getSneakers();

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

export default SneakersCard;
