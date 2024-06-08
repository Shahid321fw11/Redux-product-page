import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../redux/action";
import { useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) return <CircularProgress />;

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {product.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="auto"
              image={product.image}
              alt={product.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5">Price: ${product.price}</Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="body2">
              Category: {product.category}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
