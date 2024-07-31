import CausePage from "@/app/components/OurCauses";

const WomenWelfare = () => {
  return (
    <CausePage
      title="Girl child & Women welfare"
      description="Let's Build on Sabri Helpage's Impact. Sabri Helpage: Empowering Women and Girls."
      imageUrl={
        "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      videoUrl="https://www.youtube.com/embed/your_video_id"
      content={`
        <p>Sabri Helpage is committed to uplifting women and girls by addressing their fundamental needs and fostering their potential. Our organization provides comprehensive support to:</p>
        <ul>
          <li><strong>Street Girls:</strong> We believe in the power of education to transform lives. Sabri Helpage ensures that street girls have access to basic education, a cornerstone for their future. Additionally, we prioritize their health and well-being by providing monthly supplies of sanitary pads.</li>
          <li><strong>Women:</strong> Recognizing the importance of economic independence, we offer skill training programs to equip women with the necessary skills to secure employment. Our goal is to empower women to become self-sufficient and contribute to their communities.</li>
        
        </ul>
        <p>By providing these essential services, Sabri Helpage is creating a brighter future for women and girls, enabling them to break free from the cycle of poverty and lead fulfilling lives.</p>
      `}
    />
  );
};

export default WomenWelfare;
