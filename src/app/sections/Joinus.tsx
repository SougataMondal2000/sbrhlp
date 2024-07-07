import Button from "../components/Button";

const Joinus = () => {
  return (
    <div className="relative h-[420px] mt-4 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544132173-46e0a80d5d4a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-center text-white px-4 lg:w-[60%] md:w-[90%] w-[80%]">
        <h3 className="text-5xl lg:text-6xl mb-4">Join Us</h3>
        <hr className="my-4 md:my-6" />
        <p className="text-xl lg:text-2xl mb-8">
          Changing lives, one act of kindness at a time
        </p>
        <div className="flex justify-center gap-10 items-center">
          <Button label={"Be a Partner"} boxShadow={"none"} />
          <Button label={"Join Our Team"} boxShadow={"none"} />
        </div>
      </div>
    </div>
  );
};

export default Joinus;
