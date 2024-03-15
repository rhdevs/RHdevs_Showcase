import Wrapper from "../_components/wrapper";

interface project {
  name: string;
  linktoproject: string;
  linktoinfo: string;
  image: string;
  workinglink: boolean;
  description: string;
}
const projects: project[] = [
  {
    name: "MTRAC+",
    linktoproject: "https://mtrac.ternary.digital",
    linktoinfo: "mtrac",
    image: "mtraccover",
    description:
      "MTRAC+ is an all in one platform for Transport Operators to manage their Driving Currency, fill MTRAC+ Forms, and allow Commanders to counter-sign MTRAC+ Forms.",
    workinglink: true,
  },
  {
    name: "EMOB+",
    description:
      "EMOB+ is a system developed to streamline the process of Mob Manning by allowing commanders to mark servicemen via a QR Code.",
    linktoproject: "https://e-mob.herokuapp.com/",
    linktoinfo: "emob",
    image: "emobcover",
    workinglink: true,
  },
  {
    name: "Bibo App",
    linktoproject: "https://emob.ternary.digital",
    description:
      "Bibo app is a web app developed to improve the process of accounting for strength daily",
    linktoinfo: "bibo",
    image: "bibocover",
    workinglink: false,
  },
];

export default function ProjectsPage() {
  return (
    <Wrapper>
      <div className="mx-28 mt-16">
        <h1>Projects</h1>
        <hr className="border-grey mb-3" />
        <div className="grow grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => {
            return (
              <div key={project.name}>
                <div className="flex-col flex">
                  <div className="h-48 flex bg-white"></div>
                  {/* <ImageItem srcimg={image} alt="asd" /> */}
                  <div className="flex flex-col pl-6 pr-3 py-2 justify-between h-32">
                    <h5 className="dark:text-white text-2xl font-bold leading-8 tracking-tight">
                      {project.name}
                    </h5>
                    <h6 className="max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
                      {project.description}
                    </h6>
                    <div className="flex flex-row justify-between">
                      <a href={`projects/${project.linktoinfo}`} target="_">
                        <h6 className="text-xl font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          Learn more →
                        </h6>
                      </a>
                      {project.workinglink && (
                        <a href={project.linktoproject} target="_">
                          <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* <project-panel
                  class="w-full h-full"
                  project={project}
                ></project-panel> */}
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
