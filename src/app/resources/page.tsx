import Wrapper from "../_components/wrapper";

const frontend = [
  {
    title: "Intro to React",
    image: "file.jpeg",
    link: "/file.png",
  },
  {
    title: "Intro to Redux",
    image: "file.jpeg",
    link: "/intro-to-redux.pptx",
  },
  {
    title: "JavaScript & TypeScript Basics",
    image: "file.jpeg",
    link: "/intro-to-ts-js.pptx",
  },
];

const backend = [
  {
    title: "Python Basics",
    image: "file.jpeg",
    link: "/python.pptx",
  },
  {
    title: "Flask & Web Servers",
    image: "file.jpeg",
    link: "/flask.pptx",
  },
  {
    title: "Database Basics",
    image: "file.jpeg",
    link: "/db.pptx",
  },
];

const design = [
  {
    title: "Design 101",
    image: "file.jpeg",
    link: "/design.pdf",
  },
  {
    title: "Typography",
    image: "file.jpeg",
    link: "/typography.pdf",
  },
  {
    title: "Composition",
    image: "file.jpeg",
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
        <div className="mt-16 w-full  flex-col flex">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frontend
          </p>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
          >
            {frontend.map((file) => (
              <li key={file.title} className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  {/* <img
                    src={file.image}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  /> */}
                  {/* <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button> */}
                </div>
                <a
                  href={file.link}
                  download={file.title}
                  className="mt-2 py-2 text-l font-semibold tracking-tight text-white sm:text-xl"
                >
                  {file.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 w-full  flex-col flex">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Backend
          </p>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
          >
            {backend.map((file) => (
              <li key={file.title} className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  {/* <img
                    src={file.image}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  /> */}
                  {/* <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button> */}
                </div>
                <a
                  href={file.link}
                  download={file.title}
                  className="mt-2 py-2 text-l font-semibold tracking-tight text-white sm:text-xl"
                >
                  {file.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 w-full  flex-col flex">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Design
          </p>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
          >
            {design.map((file) => (
              <li key={file.title} className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  {/* <img
                    src={file.image}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  /> */}
                  {/* <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button> */}
                </div>
                <a
                  href={file.link}
                  download={file.title}
                  className="mt-2 py-2 text-l font-semibold tracking-tight text-white sm:text-xl"
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
