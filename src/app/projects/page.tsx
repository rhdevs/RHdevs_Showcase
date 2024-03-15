import Wrapper from "../_components/wrapper";
import { allprojects } from "./_data";

export default function ProjectsPage() {
  return (
    <Wrapper>
      <div className="mx-10 sm:mx-auto grow max-w-3xl md:w-screen">
        <h1>Projects</h1>
        <hr className="border-grey mb-3" />
        <div className=" grow grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2">
          {allprojects.map((project) => {
            return (
              <div key={project.name}>
                <div className="flex-col flex border-[1px] border-gray-800">
                  <div className="h-48 flex bg-white">
                    <img
                      className="object-fit"
                      src={project.picture}
                      alt="asd"
                    />
                  </div>
                  <div className="flex flex-col pl-6 pr-3 py-2 justify-between h-32">
                    <h5 className="dark:text-white text-2xl font-bold leading-8 tracking-tight">
                      {project.name}
                    </h5>
                    <h6 className="max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
                      {project.description}
                    </h6>
                    <div className="flex flex-row justify-between">
                      <a href={`projects/${project.id}`} target="_">
                        <h6 className="text-xl font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          Learn more →
                        </h6>
                      </a>
                      {/* {project.workinglink && (
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
                      )} */}
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
