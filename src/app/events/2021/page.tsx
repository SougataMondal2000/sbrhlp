import EventPage from "@/app/components/EventPage";

const events2021 = [
  {
    title: "Blanket Distribution in a Chilling Cold Night",
    tagline:
      "Sharing warmth in the coldest of nights, illuminating lives of senior citizens on the street.",
    imageUrl: "https://example.com/image8.jpg",
  },
  {
    title: "Vinayana – Educating a Girl Child",
    tagline:
      "Nurturing dreams, illuminating futures: supporting Aneesha on her journey to become a teacher.",
    imageUrl: "https://example.com/image9.jpg",
  },
  {
    title: "Vriddhya Seva - Senior Citizens Help",
    tagline:
      "From disheartened to delighted, Durga puja's gift of new sarees and hope to our beloved senior citizens.",
    imageUrl: "https://example.com/image10.jpg",
  },
  {
    title: "Girl Children Hygiene Program",
    tagline:
      "Nurturing Dignity, One Cycle at a Time: Sabri Helpage's monthly care, providing sanitary napkins for street girls.",
  },
  {
    title: "Distributing Educational Accessories",
    tagline:
      "Empowering Minds on 75th Independence Day, Sabri Helpage’s gift of educational essentials to over 100 street children.",
    imageUrl: "https://example.com/image11.jpg",
  },
  {
    title: "Blood Donation Camp 2021",
    tagline: "Saving lives with love – 2021 Blood donation camp.",
  },
];

const Events2021Page = () => {
  return <EventPage year="2021" events={events2021} />;
};

export default Events2021Page;
