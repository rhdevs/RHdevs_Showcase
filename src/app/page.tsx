import Image from "next/image";
import Wrapper from "./_components/wrapper";

export default async function Home() {
  return (
    <Wrapper>
      <Herosection></Herosection>
      <Joinus></Joinus>
      <CCASection></CCASection>
    </Wrapper>
  );
}

// const sectionData = {
//   title: "CCA Events/ Bonding Sessions",
//   content:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo debitis ratione quasi esse tempore tempora repellendus odio molestias facilis optio tenetur ipsa obcaecati fuga, eaque, at numquam nemo eos.",
// };
//
// const introData = {
//   title: "What we do",
//   content:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo debitis ratione quasi esse tempore tempora repellendus odio molestias facilis optio tenetur ipsa obcaecati fuga, eaque, at numquam nemo eos.",
// };

const Herosection = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b bg-transparent flex justify-center">
      <Image
        src={"/rhdevs.svg"}
        alt={"RHDevs Logo"}
        width={179}
        height={208}
        className={"my-52"}
      />
    </div>
  );
};

const features = [
  {
    name: "Opportunitues",
    description:
      "In RHDevs, you will have the chance to create meaningful apps for all RHesidents.",
    icon: "/opportunities.png",
  },
  {
    name: "Experience",
    description:
      "Gain hands-on experience in software engineering with ongoing projects.",
    icon: "/experience.png",
  },
  {
    name: "Career",
    description: "Have a headstart in your career as a software developer!",
    icon: "/career.png",
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
              <div key={feature.name} className="flex flex-col items-center">
                {/*<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">*/}
                {/*  /!* <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" /> *!/*/}
                {/*  {feature.name}*/}
                {/*</dt>*/}
                <Image src={feature.icon} alt={""} width={158} height={158} />
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 text-center">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-green-500 px-4 py-2 rounded border border-white border-solid">
            <h1 className="text-white mx-auto">Join Us</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

const CCASection = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="flex flex-col gap-10">
        <h1 className="text-white text-4xl">CCA Events/Bonding Sessions</h1>
        <div className="flex gap-10">
          <Image
            src={"/bonding.jpg"}
            alt={"CCA Photo"}
            width={534}
            height={438}
          />
          <p className="text-white self-center">Our very own CCA in action!</p>
        </div>
      </div>
    </div>
  );
};
