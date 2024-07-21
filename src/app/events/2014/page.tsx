import EventPage from "@/app/components/EventPage";

const events2014 = [
  {
    title: "Sabri Helpage Funds Mamoni's Dream Wedding",
    tagline:
      "Sabri Helpage's love, a bond so strong, made Mamoni's dreams take flight, where they belong.",
    images: [
      { url: "/MamoniWedding.png", type: "main" },
      { url: "/mamoni1.png", type: "secondary" },
      { url: "/mamoni2.png", type: "secondary" },
    ],
  },
];

const Events2014Page = () => {
  return <EventPage year="2014" events={events2014} />;
};

export default Events2014Page;
