import { Box } from "@mui/material";
//this "Box" from material ui
//let us pass any css property to the component and it just style it
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
