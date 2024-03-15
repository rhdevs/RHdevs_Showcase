import Wrapper from "../_components/wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const frontend = [
  {
    title: "Intro to React",
    prefix: "fab",
    icon: "react",
    link: "/intro-to-react.pptx",
  },
  {
    title: "Intro to Redux",
    prefix: "fas",
    icon: "laptop-code",
    link: "/intro-to-redux.pptx",
  },
  {
    title: "JavaScript & TypeScript Basics",
    prefix: "fab",
    icon: "square-js",
    link: "/intro-to-ts-js.pptx",
  },
];

const backend = [
  {
    title: "Python Basics",
    prefix: "fab",
    icon: "python",
    link: "/python.pptx",
  },
  {
    title: "Flask & Web Servers",
    prefix: "fas",
    icon: "flask",
    link: "/flask.pptx",
  },
  {
    title: "Database Basics",
    prefix: "fas",
    icon: "database",
    link: "/db.pptx",
  },
];

const design = [
  {
    title: "Design 101",
    prefix: "fab",
    icon: "figma",
    link: "/design.pdf",
  },
  {
    title: "Typography",
    prefix: "fas",
    icon: "font",
    link: "/typography.pdf",
  },
  {
    title: "Composition",
    prefix: "fas",
    icon: "pen-nib",
    link: "/composition.pdf",
  },
];

export default function Example() {
  return (
    <Wrapper>
      <div className="mx-28 mt-16">
        <h1>Resources</h1>
        <hr className="border-grey mb-3" />
        <h4>
          Here is the content that we use to train our new developers for all
          things full-stack development. Click on any of the links below to
          download the slides for your own reading!
        </h4>
        <div className="mt-10 w-full  flex-col flex">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frontend
          </p>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-8"
          >
            {frontend.map((file) => (
              <li
                key={file.title}
                className="relative flex flex-col justify-center items-center"
              >
                <FontAwesomeIcon
                  /* @ts-expect-error this error is wasting my time */
                  icon={[file.prefix, file.icon]}
                  size="3x"
                  color="white"
                />
                <a
                  href={file.link}
                  download={file.title}
                  className="mt-2 py-2 text-l font-semibold tracking-tight text-white sm:text-xl hover:text-gray-500"
                >
                  {file.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 w-full  flex-col flex">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Backend
          </p>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-8"
          >
            {backend.map((file) => (
              <li
                key={file.title}
                className="relative flex flex-col justify-center items-center"
              >
                <FontAwesomeIcon
                  /* @ts-expect-error this error is wasting my time */
                  icon={[file.prefix, file.icon]}
                  size="3x"
                  color="white"
                />
                <a
                  href={file.link}
                  download={file.title}
                  className="mt-2 py-2 text-l font-semibold tracking-tight text-white sm:text-xl hover:text-gray-500"
                >
                  {file.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 w-full  flex-col flex">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Design
          </p>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-8"
          >
            {design.map((file) => (
              <li
                key={file.title}
                className="relative flex flex-col justify-center items-center"
              >
                {/* <div className="group aspect-h-7 aspect-w-10 block w-full rounded-lg">
                  <img
                    src={file.image}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  /> 
                   <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button>
                </div>
                <FontAwesomeIcon icon={faFigma} size="3x" /> */}
                <FontAwesomeIcon
                  /* @ts-expect-error this error is wasting my time */
                  icon={[file.prefix, file.icon]}
                  size="3x"
                  color="white"
                />
                <a
                  href={file.link}
                  download={file.title}
                  className="mt-2 py-2 text-l font-semibold tracking-tight text-white sm:text-xl hover:text-gray-500"
                >
                  {file.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
