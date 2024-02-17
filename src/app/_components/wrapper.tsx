import Footerbar from "./footer-bar";
import Sidebar from "./side-bar";

const Wrapper = ({ children }) => {
  return (
    <div className="sm:max-w-screen flex min-h-screen flex-col dark:bg-black justify-between">
      <Sidebar></Sidebar>
      <div className="flex flex-col grow ">{children}</div>
      <Footerbar></Footerbar>
      {/* <footer-bar></footer-bar> */}
    </div>
  );
};

export default Wrapper;
