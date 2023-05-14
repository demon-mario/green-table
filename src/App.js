import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
// import PageNotFound from "./pages/PageNotFound";
import React, { Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { amber, deepOrange } from "@mui/material/colors";

const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: deepOrange[500],
    },
  },
});

function App() {
  const theme = useSelector((state) => state.theme.theme);

  // console.log("theme--->", theme);

  return (
    <div>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <Routes>
            <Route path="/green-table" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
