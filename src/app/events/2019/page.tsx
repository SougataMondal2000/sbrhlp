import EventPage from "@/app/components/EventPage";

const events2019 = [
  {
    title: "Nurturing Young Minds with Education and Care",
    tagline:
      "Sabri Helpage shared the gift of knowledge and time, enriching young lives at the Madarsa with educational essentials and heartwarming moments.",
    images: [
      { url: "/madarsa1.png", type: "secondary" },
      { url: "/madarsa2.png", type: "secondary" },
    ],
  },
  {
    title: "Sabri Helpage's Day of Joy and Learning in Madanpur Village",
    tagline:
      "With educational treasures, their eyes would shine, In those joyful moments, a future so divine.",
    images: [
      { url: "/madanpurmain.png", type: "main" },
      { url: "/madanpur1.png", type: "secondary" },
      { url: "/madanpur2.png", type: "secondary" },
      { url: "/madanpur3.png", type: "secondary" },
    ],
  },
  {
    title: "Warmth and Nourishment for Street Children",
    tagline:
      "Sabri Helpage's visit to Barasat was a reminder that compassion knows no boundaries, reaching out to provide not just snacks but a moment of hope to those who need it most.",
    images: [{ url: "/barasat.png", type: "main" }],
  },
];

const Events2019Page = () => {
  return <EventPage year="2019" events={events2019} />;
};

export default Events2019Page;
