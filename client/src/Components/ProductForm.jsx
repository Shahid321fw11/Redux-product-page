import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Container,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateRandomId = () => {
    return Math.floor(100 + Math.random() * 900); // Generate a random 3-digit number
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: generateRandomId(),
      title,
      price: parseFloat(price),
      description,
      category,
      image,
    };
    console.log("new", newProduct);
    dispatch(addProduct(newProduct));
    navigate("/");
  };

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
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textAlign: "center", mb: 3 }}
              >
                Create Product
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button type="submit" variant="contained" color="primary">
                    Add Product
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductForm;
