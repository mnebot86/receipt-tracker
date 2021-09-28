import NavBar from "../NavBar/NavBar";

const Layout = (props) => {
  return (
    <>
    <NavBar/>
    {props.children}
    </>
  );
};

export default Layout;