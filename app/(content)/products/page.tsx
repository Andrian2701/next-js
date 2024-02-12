import type { Metadata } from "next";

import SneakersCard from "@/components/SneakersCard";
import { getSneakers } from "../../../api/api";
import "../../../styles/pages/Home.scss";

export const metadata: Metadata = {
  title: "Products",
};

const Products = async () => {
  const sneakers = await getSneakers();

  return (
    <>
      <h2>Products</h2>
      <SneakersCard sneakers={sneakers} />
    </>
  );
};

export default Products;
