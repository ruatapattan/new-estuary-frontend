import React,{useState,useEffect} from "react";
import { Box, minWidth } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import axios from "../../../config/axios";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CardProfile from "./cardprofile/CardProfile";

const mook = [
  {
    productName: "product1",
    picProduct: "https://picsum.photos/id/20/200/300",
    price: 100,
    description:
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  },
  {
    productName: "product2",
    picProduct: "https://picsum.photos/id/49/200/300",
    price: 200,
    description:
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  },
  {
    productName: "product3",
    picProduct: "https://picsum.photos/id/145/200/300",
    price: 30000,
    description:
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  },
  {
    productName: "product4",
    picProduct: "https://picsum.photos/id/145/200/300",
    price: 30000000,
    description:
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  },
];

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

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("/category");
        const fetChcategorys = res.data.categorys;
        setProduct(fetChcategorys);
        console.log(fetChcategorys);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchCategory();
  }, []);

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
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: "90%", sm: "90%", md: "90%" } }}
      >
        {mook.map((item) => (
          <CardProfile
            productName={item.productName}
            picProduct={item.picProduct}
            // price={item.price}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProfileForm;
