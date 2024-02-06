import { StaticImageData } from "next/image";

import britain from "../assets/lang/britain.jpeg";
import ukraine from "../assets/lang/ukraine.png";
import germany from "../assets/lang/germany.webp";

type langItems = {
  img: StaticImageData;
  title: string;
};

export const langItems: langItems[] = [
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
