import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []); // useMemo用来保证函数createTheme仅仅在组件加载时调用一次
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* reset CSS */}
          <CssBaseline />

          {/* 可以直接在props中设置css属性 */}
          {/** Box组件可以作为容器组件来放置其他组件，并提供了一些常用的样式属性。
           * 比如，通过设置padding属性可以控制组件内部的间距，通
           * 过设置backgroundColor属性可以改变组件的背景颜色等。
           **/}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            {/*  导航栏组件  */}
            <Navbar />
            {/* react路由标题及路径 */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
