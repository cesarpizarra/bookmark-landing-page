import LogoDark from "../assets/logo-bookmark.svg";
import LogoLight from "../assets/logo-bookmark-light.svg";
import TabIllustrationOne from "../assets/illustration-features-tab-1.svg";
import TabIllustrationTwo from "../assets/illustration-features-tab-2.svg";
import TabIllustrationThree from "../assets/illustration-features-tab-3.svg";

export const logo = {
  logodark: LogoDark,
  logoLight: LogoLight,
};

export const navLinks = [
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Pricing",
    url: "#",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const hero = [
  { title: "A Simple Bookmark Manager" },
  {
    subtitle:
      "A clean simple interfcace to organize your favourite websites. Open a new browser tab and see your sites load instantly.Try it for free.",
  },
];

export const featureTabs = [
  {
    id: 1,
    name: "Simple Bookmarking",
    isActive: true,
    tabContent: {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      illustration: TabIllustrationOne,
    },
  },
  {
    id: 2,
    name: "Speedy Searching",
    isActive: false,
    tabContent: {
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      illustration: TabIllustrationTwo,
    },
  },
  {
    id: 3,
    name: "Easy Share",
    isActive: false,
    tabContent: {
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      illustration: TabIllustrationThree,
    },
  },
];

export const FAQsItems = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
