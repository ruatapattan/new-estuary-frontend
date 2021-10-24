import React from "react";
import { styled } from "@mui/material/styles";
import { Box, margin } from "@mui/system";
import { Button, Grid, Input, TextField } from "@mui/material";

function CreateProductForm() {
  const textFieldStyle = { width: { xs: "80%", sm: "70%" }, mb: "25px" };
  return (
    <Box
      sx={{
        width: { md: "72%", sm: "100%", xs: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: "90%",
        marginLeft: "10rem",
        // border: '1px solid red'
      }}
    >
      <Box
        sx={{
          // height: '6%',
          // width: '70%',
          width: { xs: "100%", sm: "100%", md: "100%" },
          backgroundColor: "#232836",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 50px",
          mt: "58px",
        }}
      >
        Creact new Item
      </Box>
      <Box sx={{ paddingTop: "30px" }}>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
        </div>

        <label htmlFor="contained-button-file">
          <Input
            id="contained-button-file"
            multiple
            type="file"
            sx={{ display: "none" }}
          />
          <Button
            variant="contained"
            component="span"
            sx={{ width: "100%", bgcolor: "gray", mt: "15px" }}
          >
            Upload Profile
          </Button>
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
      >
        <TextField label="Name" sx={textFieldStyle} />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          sx={textFieldStyle}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Collection"
          sx={textFieldStyle}
        />
        <TextField label="Price" sx={textFieldStyle} />

        <Button
          type="submit"
          variant="gradient"
          sx={{ color: "white", p: "10px", width: { xs: "80%", sm: "70%" } }}
        >
          Sale
        </Button>
      </Box>
    </Box>
  );
}

export default CreateProductForm;
