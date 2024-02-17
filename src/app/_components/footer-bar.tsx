import Socialcontacts from "./social-contacts";

const Footerbar = () => {
  return (
    <div className="mt-6">
      <Socialcontacts></Socialcontacts>
      <div className="flex justify-center font-light">
        <span className="pb-2 mt-4 text-xs font-light dark:text-gray-200">
          Copyright
          <span>&#169;</span>
          {new Date().getFullYear()}
          {"  "}
          RH Developers
        </span>
      </div>
    </div>
  );
};

export default Footerbar;
