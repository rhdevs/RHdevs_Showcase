export type Project = {
  id: number;
  name: string;
  description: string;
  stack: {
    name: string;
    color: string;
  }[];
  stats: {
    name: string;
    description: string;
  }[];
  actions: {
    title: string;
    description: string;
  }[];
  picture: string;
};

const allprojects: Project[] = [
  {
    id: 1,
    name: "RH App",
    description: "RH App is an all in one platform for all RH related matters",
    stack: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "Node",
        color: "green",
      },
      {
        name: "Express",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Transport Operators Served",
        description: "30",
      },
      {
        name: "Impact",
        description: "50%",
      },
      {
        name: "Impact",
        description: "21 Times",
      },
    ],
    actions: [
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Action 2",
        description: "Description 2",
      },
    ],
    picture: "telebot.jpg",
  },
  {
    id: 2,
    name: "RH Announcement Bot",
    description:
      "MTRAC+ is an all in one platform built for Transport Operators (Drivers). Platform will allow TO's and Commanders to manage administrative procedures directly on the platform.",
    stack: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "Node",
        color: "green",
      },
      {
        name: "Express",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Transport Operators Served",
        description: "30",
      },
      {
        name: "Impact",
        description: "50%",
      },
      {
        name: "Impact",
        description: "21 Times",
      },
    ],
    actions: [
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Action 2",
        description: "Description 2",
      },
    ],
    picture: "telebot.jpg",
  },
  {
    id: 3,
    name: "RH Superapp",
    description:
      "MTRAC+ is an all in one platform built for Transport Operators (Drivers). Platform will allow TO's and Commanders to manage administrative procedures directly on the platform.",
    stack: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "Node",
        color: "green",
      },
      {
        name: "Express",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Transport Operators Served",
        description: "30",
      },
      {
        name: "Impact",
        description: "50%",
      },
      {
        name: "Impact",
        description: "21 Times",
      },
    ],
    actions: [
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Action 2",
        description: "Description 2",
      },
    ],
    picture: "telebot.jpg",
  },
  {
    id: 4,
    name: "CV Automator",
    description:
      "MTRAC+ is an all in one platform built for Transport Operators (Drivers). Platform will allow TO's and Commanders to manage administrative procedures directly on the platform.",
    stack: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "Node",
        color: "green",
      },
      {
        name: "Express",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Transport Operators Served",
        description: "30",
      },
      {
        name: "Impact",
        description: "50%",
      },
      {
        name: "Impact",
        description: "21 Times",
      },
    ],
    actions: [
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Digital MTRAC Forms",
        description:
          "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      },
      {
        title: "Action 2",
        description: "Description 2",
      },
    ],
    picture: "telebot.jpg",
  },
];

export { allprojects };
