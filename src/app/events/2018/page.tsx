import EventPage from "@/app/components/EventPage";

const events2018 = [
  {
    title: "A Lifeline to a Child in Gangtok, Sikkim",
    tagline:
      "Across miles and mountains, Sabri Helpage's compassion knows no bounds. We stand by the side of those in need, providing not just medical support, but a ray of hope to a child in Gangtok, Sikkim.",
    images: [
      { url: "/gangtokmain.png", type: "main" },
      { url: "/gangtok1.png", type: "secondary" },
    ],
  },
  {
    title: "Bridging Hearts and Dreams - Kabita's Joyful Journey",
    tagline:
      "In the spirit of love and unity, Sabri Helpage made Kabita's special day a reality.",
    images: [{ url: "/kavita.png", type: "main" }],
  },
];

const Events2018Page = () => {
  return <EventPage year="2018" events={events2018} />;
};

export default Events2018Page;
