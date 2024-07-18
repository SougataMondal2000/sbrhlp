import EventPage from "@/app/components/EventPage";

const events2013 = [
  {
    title:
      "Visit to Binapani Ashram, Bolpur, Santiniketan for the Welfare of Village Children",
    tagline:
      "Bringing education, nourishment, and clean water to light up young futures.",
    imageUrl: "https://example.com/image17.jpg",
  },
  {
    title:
      "Compassion Knows No Age: Sabri Helpage's Lifelong Commitment to Mr. Pandit",
    tagline:
      "In the twilight of life, no one should walk alone, ensuring that no senior citizen is left behind.",
  },
  {
    title: "Sabri Helpage's Compassion for Buro Masi's Golden Years",
    tagline:
      "We ensured her sunset years were a masterpiece of warmth and compassion.",
  },
  {
    title: "Sabri Helpage's Dedication to Bua's Golden Years",
    tagline:
      "We held her hand through every challenge, ensuring her final chapter was written in love and dignity.",
  },
  {
    title: "Brightening Lives at Behala Blind School",
    tagline:
      "A moment of connection that touched hearts and created smiles at Behala Blind School.",
    imageUrl: "https://example.com/image18.jpg",
  },
  {
    title: "Illuminating Sushma Singh's Life",
    tagline:
      "Illuminating her path to recovery and ensuring her life was a testament to compassion and care until the very end.",
  },
  {
    title: "Sabri Helpage's Commitment to Sushila Hansda and Tribal Girls",
    tagline:
      "Sabri Helpage is changing lives one dream at a time, providing not just education but the promise of a brighter future for Sushila Hansda and her fellow tribal girls.",
  },
];

const Events2013Page = () => {
  return <EventPage year="2013" events={events2013} />;
};

export default Events2013Page;
