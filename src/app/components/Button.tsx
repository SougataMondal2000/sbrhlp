const Button = ({ label, boxShadow }: { label: string; boxShadow: string }) => {
  return (
    <button
      style={{
        boxShadow: boxShadow ? boxShadow : "",
      }}
      className="hover:-translate-y-1 hover:scale-110 duration-300 md:py-4 py-3 bg-[#FF7536] hover:bg-[#FF5722] w-fit lg:px-6 md:px-4 px-2 lg:rounded-lg rounded-md text-white lg:text-base text-xs font-semibold flex justify-center items-center"
    >
      {label}
    </button>
  );
};

export default Button;
