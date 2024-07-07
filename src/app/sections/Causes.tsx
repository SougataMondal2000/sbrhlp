import CustomCauseCard from "../components/CustomCauseCard";
import { FaHeart } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandsHolding } from "react-icons/fa6";
import { IoMdFemale } from "react-icons/io";
import { causeContent } from "../constants/constants";

const Causes = () => {
  return (
    <div className="leading-6 lg:mx-4 md:m-2 m-4">
      <h3 className="lg:text-5xl lg:mb-12 md:text-3xl text-2xl mb-6 md:text-center font-semibold">
        Our Causes
      </h3>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {causeContent.map((item: any, index) => (
          <CustomCauseCard
            image={item.image}
            icon={
              index === 0
                ? FaHandHoldingHeart
                : index === 1
                ? FaHandsHolding
                : IoMdFemale
            }
            title={item.title}
            description={item.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Causes;
