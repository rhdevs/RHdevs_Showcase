import Image from "next/image";
import Wrapper from "./_components/wrapper";

export default async function Home() {
  return (
    <Wrapper>
      <Herosection
        title={introData.title}
        content={introData.content}
      ></Herosection>
      <Joinus></Joinus>
      <Herosection
        title={sectionData.title}
        content={sectionData.content}
      ></Herosection>
    </Wrapper>
  );
}

const sectionData = {
  title: "CCA Events/ Bonding Sessions",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo debitis ratione quasi esse tempore tempora repellendus odio molestias facilis optio tenetur ipsa obcaecati fuga, eaque, at numquam nemo eos.",
};

const introData = {
  title: "What we do",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo debitis ratione quasi esse tempore tempora repellendus odio molestias facilis optio tenetur ipsa obcaecati fuga, eaque, at numquam nemo eos.",
};

const Herosection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-30 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h1 className="max-w-2xl text-white text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
              {title}
            </h1>
            <p className="text-lg leading-8 text-gray-300 mt-10">{content}</p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
            alt=""
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-12"
          />
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: "Opportunitues",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    // icon: CloudArrowUpIcon,
  },
  {
    name: "Experience",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    // icon: LockClosedIcon,
  },
  {
    name: "Career",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    // icon: ArrowPathIcon,
  },
];

const Joinus = () => {
  return (
    <div className="bg-transparent py-24 sm:py-16 bg-zinc-900 bg-dotted-spacing-16 bg-dotted-blue-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Join Us?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  {/* <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" /> */}
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="">
            <h1 className="text-white mx-auto">Join Us</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
