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
        name: "Vercel",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Users Served",
        description: "800+",
      },
      {
        name: "Impact",
        description: "65%",
      },
      {
        name: "Project Reach",
        description: "Hall Wide",
      },
    ],
    actions: [
      {
        title: "Facility Booking",
        description:
          "Easily book facilities like our gym, basketball court, and dance studio. With just a few clicks, you can secure your spot for your favourite activities.",
      },
      {
        title: "Login Functionality",
        description:
          "Easily login to your own personal account to make bookings, so that all other users know about it as well.",
      },
      {
        title: "Posts Page",
        description:
          "Able to create posts and share with the rest of the users of the RH App. Able to be used by hall leaders to broadcast information to the rest of the hall",
      },
      // {
      //   title: "",
      //   description: "Description 2",
      // },
    ],
  },
  {
    id: 2,
    name: "RH Announcement Bot",
    description: "Make publicity within Raffles Hall easier and faster.",
    stack: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "Python",
        color: "green",
      },
      {
        name: "Docker",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Users Served",
        description: "800+",
      },
      {
        name: "Impact",
        description: "100%",
      },
      {
        name: "Project Reach",
        description: "Hall Wide",
      },
    ],
    actions: [
      {
        title: "Message Broadcast",
        description:
          "RH Announcement Bot is linked to all individual block channels and hall-wide channels, thus facilitating ease of announcement",
      },
      {
        title: "Restricted Access",
        description:
          "Only approved hall leaders and JCRC are given access to use the announcement bot to make announcements",
      },
      {
        title: "Publicity",
        description:
          "Easy and efficient solution to gain widespread publicity for hall-wide events.",
      },
      // {
      //   title: "Action 2",
      //   description: "Description 2",
      // },
    ],
  },
  {
    id: 3,
    name: "RH Superapp",
    description:
      "Events calendar for all the past and future hall events, for you to relive your memories.",
    stack: [
      {
        name: "NextJS",
        color: "blue",
      },
      {
        name: "Node",
        color: "green",
      },
      {
        name: "React",
        color: "blue",
      },
      {
        name: "Vercel",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Users Served",
        description: "800+",
      },
      {
        name: "Impact",
        description: "30%",
      },
      {
        name: "Project Reach",
        description: "Hall Wide",
      },
    ],
    actions: [
      {
        title: "Events Feature",
        description:
          "Showcases all past and upcoming events hosted by Raffles Hall Clubs & Societies",
      },
      {
        title: "Calendar",
        description:
          "Has a calendar functionality which aids in ease of showcasing all events",
      },
      // {
      //   title: "Digital MTRAC Forms",
      //   description:
      //     "lorem ipsum dolor sit amet, consectetur adipisicing elit 1 Description 1",
      // },
      // {
      //   title: "Action 2",
      //   description: "Description 2",
      // },
    ],
  },
  {
    id: 4,
    name: "CV Automator",
    description:
      "Applying for a job? With your resume, we promise you that the job hunt will be a lot easier.",
    stack: [
      {
        name: "JavaScript",
        color: "yellow",
      },
      {
        name: "Node",
        color: "green",
      },
      {
        name: "Python",
        color: "blue",
      },
      {
        name: "MongoDB",
        color: "gray",
      },
    ],
    stats: [
      {
        name: "Users Served",
        description: "0",
      },
      {
        name: "Impact",
        description: "0%",
      },
      {
        name: "Project Reach",
        description: "Hall Wide",
      },
    ],
    actions: [
      {
        title: "Web Scraping",
        description:
          "Use our chrome extension on a job portal to scrape all available fields. This is to facilitate ease of input of relevant data.",
      },
      {
        title: "Resume Extraction",
        description:
          "Upload your CV/Resume into our chrome extension to extract all available fields such as Name, Email, Work Experience etc.",
      },
      {
        title: "Automated Input",
        description:
          "Automatically input all data from your resume into the job portal site.",
      },
      // {
      //   title: "Action 2",
      //   description: "Description 2",
      // },
    ],
  },
];

export { allprojects };
