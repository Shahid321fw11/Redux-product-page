import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, updateProduct } from "../redux/action";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Paper,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  Box,
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.selectedProduct);

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setFormValues({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      });
    }
  }, [product]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      ...formValues,
      price: parseFloat(formValues.price),
    };
    dispatch(updateProduct(updatedProduct));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  if (!product) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  return (
    <Container>
      <Box sx={{ textAlign: "center", m: 4 }}>
        <Typography variant="h3" gutterBottom>
          {product.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 400, mx: "auto" }}>
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditClick}
                sx={{ mr: 2, mt: 2 }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate(-1)}
                sx={{ mt: 2 }}
              >
                Back
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        open={isEditing}
        onClose={handleCancelClick}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSaveClick}>
            <TextField
              label="Title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              name="price"
              value={formValues.price}
              onChange={handleChange}
              type="number"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Category"
              name="category"
              value={formValues.category}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Image URL"
              name="image"
              value={formValues.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProductDetail;
