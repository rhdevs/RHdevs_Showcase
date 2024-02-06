const links: link[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Timeline",
    link: "/timeline",
  },
  {
    name: "Contact me",
    link: "/contact",
  },
];

interface link {
  name: string;
  link: string;
}

export default function Navbar() {
  return (
    <header className="sm:mr-5 lg:mr-10 xl:mr-20 2xl:mr-40 h-20 flex items-center justify-center sm:justify-end py-6">
      <div className="flex flex-row sm:block py-2">
        {links.map((link) => {
          return (
            <a
              key={link.name}
              href={link.link}
              className="font-medium text-gray-900 dark:text-gray-100 p-2 md:p-4"
            >
              {link.name}
            </a>
          );
        })}

        {/* <dark-mode-toggle /> */}
      </div>
    </header>
  );
}
