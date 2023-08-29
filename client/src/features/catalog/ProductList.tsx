import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  prods: Product[];
}

export default function ProductList({ prods }: Props) {
  return (
    <Grid container spacing={4}>
      {prods.map((product) => (
        <Grid key={product.id} item xs={3}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
