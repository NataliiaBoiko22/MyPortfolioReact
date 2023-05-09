import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

export const leftContact = [
  {
    href: "https://github.com/NataliiaBoiko22",
    alt: "GitHub",
    src: "/src/assets/icons/github.svg",
    bg: "rgba(255, 165, 0, 0.5)",
  },
  {
    href: "https://www.linkedin.com/in/nataliia-boiko-ab48a9242/",
    alt: "Linkedin",
    src: "/src/assets/icons/linkedin.svg",
    bg: "rgb(0, 123, 181, 0.5)",
  },
  {
    href: "https://discordapp.com/users/1017713242824507442/",

    alt: "Discord",
    src: "/src/assets/icons/discord.svg",
    bg: "rgb(124, 182, 63, 0.5)",
  },
];

export const footerContact = [
  {
    href: "mailto:nata.boyko.kras@gmail.com",
    alt: "Email",
    src: "../../src/assets/icons/email.svg",
    bg: "rgba(255, 165, 0, 0.5)",
  },
  {
    href: "tel:+48889136970",
    alt: "Call",
    src: "/src/assets/icons/call.svg",
    bg: "rgb(0, 123, 181, 0.5)",
  },
  {
    href: "https://t.me/boikonataliia",

    alt: "Telegram",
    src: "../../src/assets/icons/telegram.svg",
    bg: "rgb(124, 182, 63, 0.5)",
  },
];
export const WhoIam = [
  " I'm a Frontend Developer whose whole interest is building interactive, accessible, and responsive websites. ",
  "I am passionate about constantly improving my skills and knowledge in the field.My approach to development involves a strong focus on achieving results through dedicated work and practice. ",
  "I'm currently open to Job opportunities where I can contribute to your business and make  your users happy. ",
  "Contact me if you're interested in having a taste of my skills. ",
];

export const courses = [
  {
    place: "Rolling Scopes School [English]",
    duration: "Sep 2022 - Apr 2023",
    role: "Frontend development course",
    descr: "JS/Angular ",
    detail: "../../public/RSSchool.png",
  },
  {
    place: "SoftServe|ITAcademy",
    duration: "Oct 2022 - Jan 2023",
    role: "Development, design and architecture of modern software system",
    descr: " ",

    detail: "../../public/SoftServe.png",
  },
  {
    place: "SheCodes",
    duration: "Jul 2022 - Dec 2022",
    role: "Web Development Course",
    descr: "with React",

    detail: "../../public/SheCodesPlus.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};