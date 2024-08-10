import CausePage from "@/app/components/OurCauses";

const ElderlyCare = () => {
  return (
    <CausePage
      title="Elderly Care"
      description="Let's Build on Sabri Helpage's Impact. Sabri Helpage: A Beacon of Hope for Senior Citizens."
      imageUrl={
        "https://images.unsplash.com/photo-1559234938-b60fff04894d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      playlistUrl="PL4G5MTAzh8EmNIfrwu7lJZoyjSVwTCUZY&si=40E50jv0HCc5AZOn"
      content={`
        <p>Sabri Helpage is dedicated to enhancing the lives of senior citizens by addressing their critical healthcare needs. Our organization offers a comprehensive range of support services, including:</p>
        <ul>
          <li><strong>Comprehensive Eye Care:</strong> Providing essential eye checkups and, when necessary, covering the cost of surgery to restore vision.</li>
          <li><strong>Vital Medication Support:</strong> Assisting with the procurement of essential medications to manage chronic conditions and maintain overall health.</li>
          <li><strong>Nourishing Nutrition Programs:</strong> Offering nutritional support to ensure seniors receive the essential nutrients for a healthy and active life.</li>
        </ul>
        <p>By providing these vital services, Sabri Helpage empowers senior citizens to live with dignity, independence, and improved quality of life.</p>
      `}
    />
  );
};

export default ElderlyCare;
