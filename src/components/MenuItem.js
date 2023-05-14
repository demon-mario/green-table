import { Box } from "@mui/material";
import CardComp from "./Layout/CardComp";
// import { MenuList } from "../data/data";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menu-slice";

const MenuItem = () => {
  const menuData = useSelector((state) => state.menu.menuData);
  const loading = useSelector((state) => state.menu.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(menuData);
    if (menuData.length === 0) {
      dispatch(fetchMenu());
    }
  }, [dispatch, menuData]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        ml: 5,
        mr: 5,
        mt: 10,
      }}
    >
      {!loading &&
        menuData.map((item) => (
          // {MenuList.map((item) => (
          <CardComp data={item} key={item.recipe.label} />
          // <CardComp data={item} key={item.name} />
        ))}
      {loading && <p>Loading!! Please wait.....</p>}
    </Box>
  );
};

export default MenuItem;
