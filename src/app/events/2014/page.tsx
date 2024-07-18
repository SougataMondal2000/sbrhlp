import EventPage from "@/app/components/EventPage";

const events2014 = [
  {
    title: "Sabri Helpage Funds Mamoni's Dream Wedding",
    tagline:
      "Sabri Helpage's love, a bond so strong, made Mamoni's dreams take flight, where they belong.",
    imageUrl: "/MamoniWedding.png",
  },
];

const Events2014Page = () => {
  return <EventPage year="2014" events={events2014} />;
};

export default Events2014Page;
