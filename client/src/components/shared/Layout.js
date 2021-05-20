import Header from "./Header";
import Nav from "./Nav.js";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
