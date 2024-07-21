import EventPage from "@/app/components/EventPage";

const events2013 = [
  {
    title:
      "Visit to Binapani Ashram, Bolpur, Santiniketan for the Welfare of Village Children",
    tagline:
      "Bringing education, nourishment, and clean water to light up young futures.",
    images: [
      {
        url: "/shantiniketan1.png",
        type: "secondary" as "secondary" as "secondary",
      },
      { url: "/shantiniketan2.png", type: "secondary" as "secondary" },
    ],
  },
  {
    title:
      "Compassion Knows No Age: Sabri Helpage's Lifelong Commitment to Mr. Pandit",
    tagline:
      "In the twilight of life, no one should walk alone, ensuring that no senior citizen is left behind.",
    images: [{ url: "/MrPandit.png", type: "main" as "main" }],
  },
  {
    title: "Sabri Helpage's Compassion for Buro Masi's Golden Years",
    tagline:
      "We ensured her sunset years were a masterpiece of warmth and compassion.",
    images: [{ url: "/buromasi.png", type: "main" as "main" }],
  },
  {
    title: "Sabri Helpage's Dedication to Bua's Golden Years",
    tagline:
      "We held her hand through every challenge, ensuring her final chapter was written in love and dignity.",
    images: [{ url: "/bua.png", type: "main" as "main" }],
  },
  {
    title: "Brightening Lives at Behala Blind School",
    tagline:
      "A moment of connection that touched hearts and created smiles at Behala Blind School.",
    images: [
      { url: "/behalamain.png", type: "main" as "main" },
      { url: "/behala1.png", type: "secondary" as "secondary" },
      { url: "/behala2.png", type: "secondary" as "secondary" },
    ],
  },
  {
    title: "Illuminating Sushma Singh's Life",
    tagline:
      "Illuminating her path to recovery and ensuring her life was a testament to compassion and care until the very end.",
    images: [{ url: "/sushma.png", type: "main" as "main" }],
  },
  {
    title: "Sabri Helpage's Commitment to Sushila Hansda and Tribal Girls",
    tagline:
      "Sabri Helpage is changing lives one dream at a time, providing not just education but the promise of a brighter future for Sushila Hansda and her fellow tribal girls.",
    images: [{ url: "/sushila.png", type: "main" as "main" }],
  },
];

const Events2013Page = () => {
  return <EventPage year="2013" events={events2013} />;
};

export default Events2013Page;
