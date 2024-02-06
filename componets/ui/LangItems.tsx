import Image, { StaticImageData } from "next/image";
import { MenuItem, Box } from "@mui/material";

import britain from "../../assets/lang/britain.jpeg";
import ukraine from "../../assets/lang/ukraine.png";
import germany from "../../assets/lang/germany.webp";

type langMenu = {
  img: StaticImageData;
  title: string;
};

const langMenu: langMenu[] = [
  {
    img: britain,
    title: "English",
  },
  {
    img: ukraine,
    title: "Ukrainian",
  },
  {
    img: germany,
    title: "German",
  },
];

const LangItems = ({ handleClose }: any) => {
  return (
    <>
      {langMenu.map((item) => (
        <MenuItem
          onClick={handleClose}
          sx={{ height: "38.5px", display: "flex", gap: "0.8rem" }}
        >
          <Box sx={{ height: "20px", width: "27px" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              alt="language"
              src={item.img}
            />
          </Box>
          {item.title}
        </MenuItem>
      ))}
    </>
  );
};

export default LangItems;
