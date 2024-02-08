import type { Metadata } from "next";

import SneakerCard from "@/components/SneakerCard";
import { getSneakers } from "@/utils/api/getSneakers";
import "../../styles/pages/Home.scss";

export const metadata: Metadata = {
  title: "Products",
};

const Products = async () => {
  const sneakers = await getSneakers();

  return (
    <>
      <h2>Products</h2>
      <SneakerCard sneakers={sneakers} />
    </>
  );
};

export default Products;
