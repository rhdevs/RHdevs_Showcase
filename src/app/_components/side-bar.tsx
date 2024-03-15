import Image from "next/image";

const Sidebar = () => {
  return (
    <header className="flex flex-row justify-between mt-5 w-full h-10 ">
      <div className="w-1/5 flex flex-row justify-center ">
        <Image
          className=" h-10 object-contain"
          height={30}
          width={30}
          src="/rhdevs.png"
          alt=""
        />
      </div>
      <div className="flex flex-row  py-2 justify-evenly w-3/5 ">
        {/* <div className="w-10 bg-red-200">ASD</div>
        <div className="w-10 bg-red-200">ASD</div> */}
        {links.map((x) => {
          return (
            <div key={x.name}>
              <a
                href={x.link}
                className="font-medium text-gray-100 p-2 md:p-4 grow"
              >
                {x.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row px-2 py-2 justify-center w-1/5">
        <div key={button.name}>
          <a className="text-gray-100 md:px-6 md:py-3 grow bg-blue-500 hover:bg-blue-700 font-bold py-2 px-2 border border-blue-700 rounded">
            {button.name}
          </a>
        </div>
      </div>
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
    link: "/aboutus",
  },
  {
    name: "PROJECTS",
    link: "/projects",
  },
  {
    name: "RESOURCES",
    link: "/timeline",
  },
];

const button: link = {
  name: "JOIN US!",
  link: "/join-us",
};

interface link {
  name: string;
  link: string;
}

export default Sidebar;
