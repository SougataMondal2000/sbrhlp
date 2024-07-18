import EventPage from "@/app/components/EventPage";

const events2020 = [
  {
    title: "Supporting Stranded Laborers during the COVID Crisis",
    tagline:
      "Extending a lifeline of compassion and essentials to laborers in need, because every helping hand can change lives.",
    imageUrl: "https://example.com/image12.jpg",
  },
  {
    title:
      "Sabri Helpage's Compassion Shines Bright in the Aftermath of Amphan Storm",
    tagline:
      "Amphan's fury may have taken their homes, but Sabri Helpage brought hope, nourishment, and hygiene to the resilient souls of Sunderban villages.",
  },
  {
    title: "Sabri Helpage Brings Christmas Joy to Madanpur Village",
    tagline: "Lighting Up Hearts with Education and Play.",
    imageUrl: "https://example.com/image13.jpg",
  },
  {
    title: "Sabri Helpage Brightens Lives at Kamakhya Balak Ashram",
    tagline: "Empowering with Education and Joy.",
  },
];

const Events2020Page = () => {
  return <EventPage year="2020" events={events2020} />;
};

export default Events2020Page;
