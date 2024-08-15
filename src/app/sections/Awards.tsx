"use client";
import Link from "next/link";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const Awards = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F8F5F4] lg:h-[520px] md:h-[450px] flex items-center max-md:py-8">
      <div className="lg:w-[60%] md:w-[90%] w-[80%] mx-auto leading-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="md:w-[50%]">
          <h3 className="font-serif lg:text-5xl lg:mb-6 md:text-3xl text-2xl mb-6 font-semibold">
            The SocioFare
          </h3>
          <h2 className="text-gray-600 lg:mb-10 mb-8 leading-10 md:text-sm text-xs">
            The SocioFare Awards, a prestigious Award by Sabri Helpage, shines a
            radiant spotlight on excellence in Social Welfare. This
            distinguished Award is a grand celebration, an ode to the remarkable
            individuals and organizations, whose extraordinary dedication
            illuminates society&apos;s path towards a brighter future.
          </h2>
          <div className="flex justify-start items-center gap-4">
            <div onClick={() => router.push("https://sociofare.com/lander")}>
              <Button label={"Sociofare.com"} boxShadow={"none"} />
            </div>
            <Link href={"/the-sociofare/award-nomination"}>
              <Button label={"Award Nomination"} boxShadow={"none"} />
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] mt-8 md:mt-0">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/videoseries?list=${`PLnaPjVv1wEfnmipSVcdke9HAI_af-4hsH`}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Awards;
