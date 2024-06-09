import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit">
              Home
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/create-product" underline="none" color="inherit">
              Add Product
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
