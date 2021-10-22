import { border, Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";
function Banner() {
  const Name = styled("div")(({ theme }) => ({
    color: "white",
    padding: theme.spacing(2, 0),
  }));
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "50vh", backgroundColor: "#232836" }}
    >
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Avatar sx={{ width: 120, height: 120 }}>H</Avatar>
        <Name>{"Name"}</Name>
      </Stack>
    </Box>
  );
}

export default Banner;
