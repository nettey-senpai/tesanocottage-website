import {
  email,
  facebook,
  instagram,
  location,
  phone,
  tiktok,
} from "../assets/icons";
import {
  dome1,
  dome2,
  dome3,
  dome4,
  food1,
  lobby,
  room4,
  room5,
} from "../assets/images";


export const hero = [
  {
    img: dome1,
  },
  {
    img: lobby,
  },
  {
    img: room4,
  },
];

export const homeEvents = [
  {
    img: dome2,
  },
  {
    img: dome3,
  },
];

export const views = [
  {
    img: room5,
    label: "Rooms",
  },
  {
    img: food1,
    label: "Restaurant",
  },
  {
    img: dome4,
    label: "Events",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Rooms",
      },
      {
        name: "Restaurant",
      },
      {
        name: "Gallery",
      },
      {
        name: "Events",
      },
      {
        name: "Contact",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "Facebook",
      },
      {
        name: "Instagram",
      },
      {
        name: "Tik Tok",
      },
      {
        name: "Twitter",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        name: "info@tesanocottage.com",
        icon: email,
      },
      {
        name: "+233 50 600 3244 / +233 30 225 5891",
        icon: phone,
      },
      {
        name: "10 West Tesano Drive (Off Cliff Street)Accra, Ghana. Digital Address : GA-255-5896",
        icon: location,
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    icon: tiktok,
    link: "https://www.tiktok.com/",
  },
];
