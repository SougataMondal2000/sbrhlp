import EventPage from "@/app/components/EventPage";

const events2020 = [
  {
    title: "Supporting Stranded Laborers during the COVID Crisis",
    tagline:
      "Extending a lifeline of compassion and essentials to laborers in need, because every helping hand can change lives.",
    images: [
      { url: "/covidmain.png", type: "main" },
      { url: "/covid1.png", type: "secondary" },
      { url: "/covid2.png", type: "secondary" },
      { url: "/covid3.png", type: "secondary" },
      { url: "/covid4.png", type: "secondary" },
    ],
  },
  {
    title:
      "Sabri Helpage's Compassion Shines Bright in the Aftermath of Amphan Storm",
    tagline:
      "Amphan's fury may have taken their homes, but Sabri Helpage brought hope, nourishment, and hygiene to the resilient souls of Sunderban villages.",
    images: [
      { url: "/amphanmain.png", type: "main" },
      { url: "/amphan1.png", type: "secondary" },
      { url: "/amphan2.png", type: "secondary" },
      { url: "/amphan3.png", type: "secondary" },
      { url: "/amphan4.png", type: "secondary" },
    ],
  },
  {
    title: "Sabri Helpage Brings Christmas Joy to Madanpur Village",
    tagline: "Lighting Up Hearts with Education and Play.",
    images: [
      { url: "/christmasmain.png", type: "main" },
      { url: "/christmas1.png", type: "secondary" },
      { url: "/christmas2.png", type: "secondary" },
      { url: "/christmas3.png", type: "secondary" },
      { url: "/christmas4.png", type: "secondary" },
      { url: "/christmas5.png", type: "secondary" },
      { url: "/christmas6.png", type: "secondary" },
      { url: "/christmas7.png", type: "secondary" },
      { url: "/christmas8.png", type: "secondary" },
    ],
  },
  {
    title: "Sabri Helpage Brightens Lives at Kamakhya Balak Ashram",
    tagline: "Empowering with Education and Joy.",
    images: [
      { url: "/kamakhya1.png", type: "secondary" },
      { url: "/kamakhya2.png", type: "secondary" },
      { url: "/kamakhya3.png", type: "secondary" },
      { url: "/kamakhya4.png", type: "secondary" },
    ],
  },
];

const Events2020Page = () => {
  return <EventPage year="2020" events={events2020} />;
};

export default Events2020Page;
