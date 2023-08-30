import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [prods, setProds] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((prods) => setProds(prods))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message="Loading products..." />;

  return (
    <>
      <ProductList prods={prods} />
    </>
  );
}
