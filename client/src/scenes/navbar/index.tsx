import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

// 定义props的类型

const Navbar = () => {
  const { palette } = useTheme();

  // 判断当前位于哪个页面 dashboard or prediction
  const [selected, setSelected] = useState("dashboard");
  return (
    // 利用FlexBetween代替BOX设置样式
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* 左边 */}
      <FlexBetween gap="0.75rem">
        {/* sx 定义图标的样式 */}
        <PixIcon sx={{ fontSize: "28px" }} />

        {/* Typography是mui中定义文字样式的一种方式 */}
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* 右边 */}
      <FlexBetween gap="2rem">
        {/* dashboard的BOX */}
        {/* 可以直接在mui中使用伪类选择器&:hover */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          {/* 配置路由链接 */}
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            // 根据selected的值确定样式
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        {/* prediction的BOX */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          {/* 配置路由链接 */}
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            // 根据selected的值确定样式
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
