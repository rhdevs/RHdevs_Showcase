import Wrapper from "~/app/_components/wrapper";

import { allprojects } from "../_data";

export default function Page({ params }: { params: { project: string } }) {
  const project = allprojects.find(
    (project) => project.id === Number(params.project),
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const Stack = () => {
    return (
      <div className="mb-2 flex flex-wrap">
        {project.stack.map((stack) => (
          <span
            key={stack.name}
            className={`mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-${stack.color}-600`}
          >
            {stack.name}
            test
          </span>
        ))}
      </div>
    );
  };

  const Impact = () => {
    return (
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {project.stats.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 bg-black shadow rounded-lg overflow-hidden border-2 dark:border-gray-800 sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-200">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  };
  const Features: React.FC = () => {
    return (
      <div className="rounded-lg  bg-black border-gray-800 border-2 overflow-hidden shadow divide-y divide-gray-800 dark:divide-gray-800 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {project.actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={`${
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : ""
            } ${actionIdx === 1 ? "sm:rounded-tr-lg" : ""} ${
              actionIdx === project.actions.length - 2 ? "sm:rounded-bl-lg" : ""
            } ${
              actionIdx === project.actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : ""
            } relative group bg:black p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500`}
          >
            <div>
              <h3 className="text-lg font-medium">
                <button className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </button>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="mx-28 mt-16">
        <h1>{project.name}</h1>
        <h3>{project.description}</h3>
        <h2>Stack</h2>
        <Stack></Stack>
        <Impact></Impact>
        <h2>Features</h2>
        <Features></Features>
      </div>
    </Wrapper>
  );
}
// For Tailwind Compiler
// bg-purple-600
// bg-blue-600
// bg-green-600
// bg-blue-600
// bg-black-600
// bg-gray-600
