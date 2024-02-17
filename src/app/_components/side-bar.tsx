import Image from "next/image";

const Sidebar = () => {
  return (
    <header className="flex flex-row justify-between mt-3 w-full h-10 ">
      <div className="w-1/5 flex flex-row justify-center ">
        <Image
          className=" h-10 object-contain"
          height={30}
          width={30}
          src="/rhdevs.png"
          alt=""
        />
      </div>
      <div className="flex flex-row  py-2 justify-between  w-3/5 ">
        {/* <div className="w-10 bg-red-200">ASD</div>
        <div className="w-10 bg-red-200">ASD</div> */}
        {links.map((x) => {
          return (
            <div key={x.name}>
              <a className="font-medium text-gray-100 p-2 md:p-4 grow">
                {x.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-1/5">asd</div>
    </header>
  );
};
//asd
const links: link[] = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT US",
    link: "/projects",
  },
  {
    name: "PROJECTS",
    link: "/about",
  },
  {
    name: "RESOURCES",
    link: "/timeline",
  },
];

interface link {
  name: string;
  link: string;
}

export default Sidebar;
