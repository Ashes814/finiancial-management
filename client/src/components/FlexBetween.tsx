import { Box } from "@mui/material";
import { styled } from "@mui/system";
// 设置FlexBetween用于替代BOX的样式
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
