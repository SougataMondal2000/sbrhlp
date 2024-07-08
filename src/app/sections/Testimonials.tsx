import TesttimonialCard from "../components/TesttimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-[#F8F5F4] pt-10">
      <h3 className="font-serif lg:text-5xl lg:mb-12 md:text-3xl text-2xl mb-6 md:text-center font-semibold">
        Well wishes from our Patrons
      </h3>
      <div
        className="h-[600px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex lg:gap-2 flex-wrap justify-center items-center h-full">
          <TesttimonialCard
            name="Anna Stokes"
            title="Artist"
            imageSrc="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={4}
          />
          <TesttimonialCard
            name="Anna Stokes"
            title="Artist"
            imageSrc="https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={4}
          />
          <TesttimonialCard
            name="Anna Stokes"
            title="Artist"
            imageSrc="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
