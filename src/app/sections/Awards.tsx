import Button from "../components/Button";

const Awards = () => {
  return (
    <div className="bg-[#F8F5F4] lg:h-[520px] md:h-[450px] flex items-center max-md:py-8">
      <div className="lg:w-[60%] md:w-[90%] w-[80%] mx-auto leading-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="md:w-[50%]">
          <h3 className="lg:text-5xl lg:mb-6 md:text-3xl text-2xl mb-6 font-semibold">
            The SocioFare Awards
          </h3>
          <h2 className="text-gray-600 lg:mb-10 mb-8 leading-10 md:text-sm text-xs">
            The SocioFare Awards, a prestigious Award by Sabri Helpage, shines a
            radiant spotlight on excellence in Social Welfare. This
            distinguished Award is a grand celebration, an ode to the remarkable
            individuals and organizations, whose extraordinary dedication
            illuminates society's path towards a brighter future.
          </h2>
          <Button label={"The Sociofare Awards"} boxShadow={"none"} />
        </div>
        <div className="md:w-[50%] mt-8 md:mt-0">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/V616o-YsA8g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Awards;
