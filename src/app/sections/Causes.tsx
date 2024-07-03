import CustomCauseCard from "../components/CustomCauseCard";
import { FaHeart } from "react-icons/fa";

const Causes = () => {
  return (
    <div className="leading-6 lg:mx-4 md:m-2 m-4">
      <h3 className="lg:text-5xl lg:mb-12 md:text-3xl text-2xl mb-6 md:text-center font-semibold">
        Our Causes
      </h3>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <CustomCauseCard
          image={
            "https://images.unsplash.com/photo-1491833167315-f2f6c7c5deab?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          icon={FaHeart}
          title="Elderly care"
          description="Caring hearts, nurturing lives: Embracing seniors with dignity. Join us in making their golden years truly golden."
        />
        <CustomCauseCard
          image={
            "https://images.unsplash.com/photo-1491833167315-f2f6c7c5deab?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          icon={FaHeart}
          title="Elderly care"
          description="Caring hearts, nurturing lives: Embracing seniors with dignity. Join us in making their golden years truly golden."
        />
        <CustomCauseCard
          image={
            "https://images.unsplash.com/photo-1491833167315-f2f6c7c5deab?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          icon={FaHeart}
          title="Elderly care"
          description="Caring hearts, nurturing lives: Embracing seniors with dignity. Join us in making their golden years truly golden."
        />
      </div>
    </div>
  );
};

export default Causes;
