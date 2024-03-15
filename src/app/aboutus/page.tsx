import Wrapper from "../_components/wrapper";
const page = () => {
  return (
    <Wrapper>
      <div className="mx-28 mt-16">
        <h1 className="mb-8 text-4xl font-black leading-relaxed text-gray-800 dark:text-gray-200 md:text-5xl">
          About
        </h1>
        <hr className="border-grey mb-3" />
        <h4 className="my-2 text-lg max-w-none text-gray-200">
          Hi! I'm an aspiring software engineer with 2 years of web development
          experience. I worked as the head of NSFC Projects Team, an SAF
          digitalisation effort in my NS journey. In the 2 years I was in
          Projects Team, I had the opportunity to work on army wide projects,
          such as the MTRAC+ platform, where we currently serve 20k Transport
          Operators(Drivers) in their day to day operations. I am a self
          directed learner, whos self-taught web development. Do checkout the
          projects tab for more information about my projects and the impact I
          made in the SAF.
        </h4>
        <div className="mt-16 w-full  flex-col justify-center flex">
          <h2 className="my-6 text-5xl font-semibold text-gray-800 dark:text-gray-200 flex justify-center">
            Excos
          </h2>
          <div className="flex flex-row">
            <Person name="Chuah Zi Yang" />
          </div>
        </div>
        {/* <div class="my-10">
          <a :href="resumelink" target="_" class="my-10 dark:text-gray-200">
            <RoughNotation
              :is-show="true"
              :strokeWidth="3"
              type="box"
              color="#F5E1FF"
              :animationDuration="2500"
            >
              Resume
            </RoughNotation>
          </a>
        </div>
        <h2>Languages</h2>
        <stack-bar :stack="languages"></stack-bar>
        <h2>Skills</h2>
        <stack-bar :stack="skills"></stack-bar> */}
      </div>
    </Wrapper>
  );
};

export default page;

interface PersonProps {
  name: string;
}

const Person = ({ name }: PersonProps) => {
  return (
    <div className="w-1/3 flex-grow flex justify-center">
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        {people.map((person) => (
          <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
            <img
              className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white text-center">
              {person.name}
            </h3>
            <p className="text-sm text-center leading-6 text-gray-400">
              {person.role}
            </p>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <a
                  href={person.twitterUrl}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={person.instagramUrl}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
interface Person {
  name: string;
  role: string;
  imageUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
}

const people: Person[] = [
  {
    name: "Chuah Zi Yang",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Xin Min",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "Farhan Navas",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
    instagramUrl: "#",
  },
  // More people...
];
