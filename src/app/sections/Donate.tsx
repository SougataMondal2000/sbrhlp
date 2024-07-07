import Button from "../components/Button";

const Donate = () => {
  return (
    <div className="relative h-[420px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-center text-white px-4 lg:w-[60%] md:w-[90%] w-[80%]">
        <p className="text-xl lg:text-4xl lg:mb-14 mb-8">
          Changing lives, one act of kindness at a time
        </p>
        <div className="flex justify-center gap-10 items-center">
          <Button label={"Donate"} boxShadow={"none"} />
        </div>
      </div>
    </div>
  );
};

export default Donate;
