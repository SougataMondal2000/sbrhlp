import CausePage from "@/app/components/OurCauses";

const MentalHealth = () => {
  return (
    <CausePage
      title="Mental Health Awareness"
      description="Let's Build on Sabri Helpage's Impact. Sabri Helpage: Championing Mental Health."
      imageUrl={
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      videoUrl="https://www.youtube.com/embed/your_video_id"
      content={`
        <p>Sabri Helpage recognizes the critical importance of mental health and is committed to breaking the stigma surrounding it. In a society that often overlooks mental well-being, we are at the forefront of creating awareness and providing essential support.</p>
        <p>Our organization focuses on:</p>
        <ul>
          <li><strong>Raising Awareness:</strong> Educating the public about the significance of mental health and dispelling harmful misconceptions.</li>
          <li><strong>Community Outreach:</strong> Conducting field visits to identify individuals in need of mental health support and assess their specific requirements.</li>
          <li><strong>Building a Supportive Network:</strong> Connecting individuals with the necessary mental health services and resources.</li>
        </ul>
        <p>By prioritizing mental health, Sabri Helpage aims to create a more compassionate and understanding society where everyone has access to the support they deserve.</p>
      `}
    />
  );
};

export default MentalHealth;
