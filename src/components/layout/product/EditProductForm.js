import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";
import MenuItem from "@mui/material/MenuItem";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, Input, TextField } from "@mui/material";
function EditProductForm() {
  const textFieldStyle = { width: { xs: "80%", sm: "70%" }, mb: "25px" };
  const location = useLocation();
  const history = useHistory();

  const [category, setCategory] = useState(location.state.product.category.id);
  const [name, setName] = useState(location.state.product.productName);
  const [description, setDescription] = useState(
    location.state.product.description
  );
  const [price, setPrice] = useState(location.state.product.price);
  const [coverPic, setCoverPic] = useState(location.state.product.picProduct);
  const [image, setImage] = useState(location.state.product.picProduct);
  const [externalLink, setExternalLink] = useState(
    location.state.product.externalLink
  );

  console.log(location.state.product.id);

  const [optionCategory, setOptionCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("/category");
        const fetChcategorys = res.data.categorys;
        setOptionCategory(fetChcategorys);
        // console.log(fetChcategorys);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchCategory();
  }, []);

  const handleChangeFile = (e) => {
    // console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    setCoverPic(e.target.files[0]);
  };

  const handleEditProduct = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("categoryId", category);
      formData.append("price", price);
      formData.append("coverPic", coverPic);
      formData.append("externalLink", externalLink);
      formData.append("hashtag", "link to product");

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const res = await axios.put(
        `/product/${location.state.product.id}`,
        formData,
        config
      );

      // const res = await axios.put(`/product/${location.state.product.id}`, {
      //   price,
      //   name,
      //   description,
      //   categoryId: category,
      //   coverPic,
      //   externalLink,
      // });

      // console.log(res.data);

      history.push("/profile");
      window.location.reload();
    } catch (err) {
      console.log(err);
      // setErrorAddForm({ ...err, errBack: err.response.data.message });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        // height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFF1F3",
      }}
    >
      <Box
        sx={{
          width: { md: "72%", sm: "100%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          height: "80%",
          marginTop: "5rem",
        }}
      >
        <Box
          sx={{
            // height: '6%',
            // width: '70%',
            width: { xs: "90%", sm: "90%", md: "70%" },
            backgroundColor: "#232836",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "20px 50px",
            mt: "50px",
          }}
        >
          Edit Item
        </Box>
        <Box sx={{ paddingTop: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={
                image
                  ? image
                  : "https://res.cloudinary.com/duca0jbyn/image/upload/v1635160655/1478594_uop0jq.png"
              }
              style={{
                width: "30%",
              }}
              alt=""
            />
          </div>

          <label htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              multiple
              type="file"
              sx={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                component="span"
                sx={{
                  width: "60%",
                  bgcolor: "gray",
                  mt: "15px",
                }}
              >
                Upload Profile
              </Button>
            </Box>
          </label>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "80px 0px",
            mb: "80px",
          }}
          component="form"
          onSubmit={handleEditProduct}
        >
          <TextField
            sx={textFieldStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="standard-multiline-static"
            value={description}
            multiline
            sx={textFieldStyle}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            sx={textFieldStyle}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {optionCategory.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            value={price}
            sx={textFieldStyle}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            value={externalLink}
            sx={textFieldStyle}
            onChange={(e) => setExternalLink(e.target.value)}
          />

          <Button
            type="submit"
            variant="gradient"
            sx={{ color: "white", p: "10px", width: { xs: "80%", sm: "70%" } }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditProductForm;
