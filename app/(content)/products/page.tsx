import type { Metadata } from "next";

import SneakersCard from "@/components/SneakersCard";
import "../../../styles/pages/Home.scss";

export const metadata: Metadata = {
  title: "Products",
};

const Products = async () => {
  return (
    <>
      <h2>Products</h2>
      <SneakersCard />
    </>
  );
};

export default Products;
