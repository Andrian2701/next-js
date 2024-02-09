import { ReactElement } from "react";
import { GrAndroid } from "react-icons/gr";
import { IoBug } from "react-icons/io5";
import { FaApple, FaWindows } from "react-icons/fa";

type Widgets = {
  icon: ReactElement;
  value: string;
  title: string;
  bg: string;
  iconColor: string;
  fontColor: string;
};

export const widgetsData: Widgets[] = [
  {
    icon: <GrAndroid />,
    value: "811k",
    title: "Weekly Sales",
    bg: "#c8facd",
    iconColor: "rgb(0, 82, 73)",
    fontColor: "#007b55",
  },
  {
    icon: <FaApple />,
    value: "1.38m",
    title: "New Users",
    bg: "#d0f2ff",
    iconColor: "rgb(4, 41, 122)",
    fontColor: "#0c53b7",
  },
  {
    icon: <FaWindows />,
    value: "2.1m",
    title: "Item Orders",
    bg: "#fff7cd",
    iconColor: "rgb(122, 79, 1)",
    fontColor: "#b78103",
  },
  {
    icon: <IoBug />,
    value: "217",
    title: "Bug Reports",
    bg: "#ffe7d9",
    iconColor: "rgb(122, 12, 46)",
    fontColor: "#b72136",
  },
];
