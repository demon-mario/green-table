import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <h1>{props.children}</h1>
      <Footer />
    </>
  );
};

export default Layout;
