const partnerIcons = [
  {
    icon: "/Sabri_Properties.webp",
  },
  {
    icon: "/Suhana_Shop.webp",
  },
  {
    icon: "/Little_Lamb.webp",
  },
  {
    icon: "/shareyrheart.png",
  },
];

const Partners = () => {
  return (
    <div className="bg-[#F8F5F4] lg:h-[330px] md:h-[450px] max-md:py-8 flex items-center justify-center">
      <div className="w-full">
        <h3 className="text-sm lg:mb-10 mb-2 font-light text-center">
          OUR PARTNERS
        </h3>
        <div className="flex md:gap-10 gap-2 justify-center items-center px-2">
          {partnerIcons.map((item: any, index) => (
            <div
              key={index}
              className="rounded-md flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <img
                src={item.icon}
                alt={`Partner ${index + 1}`}
                className="w-[200px] md:h-[200px] h-[100px] object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
