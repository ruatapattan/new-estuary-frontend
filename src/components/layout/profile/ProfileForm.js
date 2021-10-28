import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import axios from "../../../config/axios";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CardProfile from "./cardprofile/CardProfile";
function ProfileForm() {
  // seach
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    left: "5px",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  //call product
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleClickDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`/product/${id}`);
      setToggle((c) => !c);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/product");
        const resProducts = res.data.products;
        console.log(resProducts);
        setProducts(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [toggle]);

  const handleEditProduct = async (products) => {
    const {
      coverPic,
      name,
      externalLink,
      description,
      price,
      hashtag,
      categoryId,
    } = products;
    try {
      await axios.put(`/product/${products.id}`, {
        coverPic,
        name,
        externalLink,
        description,
        price,
        hashtag,
        categoryId,
      });
      setToggle((c) => !c);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      className="BOXXXXXXXXX"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: { xs: "100%", sm: "100%", md: "72%" } }}
      // border="5px solid pink"
      backgroundColor="#EFF1F3"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: { xs: "90%", sm: "90%", md: "90%" }, mt: "15px" }}
        // border="5px solid blue"
        flexWrap="wrap"

        // height="5vh"
      >
        <Search
          sx={{
            m: {
              lg: "0px 0px 10px 0px",
              md: "0px 0px 10px 0px",
              xs: "0px 0px 10px 0px",
            },
            width: { md: "250px", xs: "100%" },
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              width: { md: "250px", xs: "100%" },
              height: "50px",
              border: "1px groove",
            }}
          />
        </Search>

        <TextField
          id="outlined-select-currency"
          select
          label="Single items"
          sx={{ mb: "10px", width: { md: "250px", xs: "100%" } }}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Recently Received"
          sx={{ mb: "10px", width: { md: "250px", xs: "100%" } }}
        />
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{ width: { xs: "90%", sm: "90%", md: "90%" } }}
      >
        {products.map((item) => (
          <CardProfile
            key={item.id}
            id={item.id}
            productName={item.name}
            picProduct={item.coverPic}
            price={item.price}
            description={item.description}
            handleClickDelete={handleClickDelete}
            handleEditProduct={handleEditProduct}
            externalLink={item.externalLink}
            category={item.ProductCategory}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProfileForm;
