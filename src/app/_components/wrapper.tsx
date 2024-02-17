import Footerbar from "./footer-bar";
import Sidebar from "./side-bar";

const Wrapper = ({ children }) => {
  return (
    <div className="sm:max-w-screen flex min-h-screen flex-col dark:bg-black justify-between">
      <Sidebar></Sidebar>
      <div className="flex mx-10 sm:mx-auto grow max-w-3xl md:w-screen">
        {children}
      </div>
      <Footerbar></Footerbar>
      {/* <footer-bar></footer-bar> */}
    </div>
  );
};

export default Wrapper;
