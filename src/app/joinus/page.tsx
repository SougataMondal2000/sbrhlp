import Button from "@/app/components/Button";
import Donate from "@/app/sections/Donate";
import Register from "../sections/Register";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img
          src="/liftup.jpeg"
          alt="People helping each other"
          className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[750px] object-cover rounded-lg mb-6 p-2"
        />
      </div>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-12 lg:mb-16 border-b pb-12 lg:pb-16">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">Choose to be an</span>
            <div className="h-px bg-orange-500 w-12 ml-2"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 lg:mb-0">
              Intern
            </h2>
            <div className="lg:max-w-xl">
              <p className="text-gray-600 mb-4">
                Internship at and with Helpage is a transformational learning
                experience that will enable you to make a difference where
                it&apos;s needed the most.
              </p>
              <Button label={"View Opportunities >"} boxShadow={"none"} />
            </div>
          </div>
        </section>

        <section className="mb-12 lg:mb-16 border-b pb-12 lg:pb-16">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">Become a</span>
            <div className="h-px bg-orange-500 w-12 ml-2"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 lg:mb-0">
              Volunteer
            </h2>
            <div className="lg:max-w-xl">
              <p className="text-gray-600 mb-4">
                Volunteering at Sabri Helpage is an experiential learning
                opportunity that gives you the superpower to know your strength
                and make a difference where it&apos;s needed the most.
              </p>
              <Button label={"View Opportunities >"} boxShadow={"none"} />
            </div>
          </div>
        </section>

        <section className="mb-12 lg:mb-16">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">View</span>
            <div className="h-px bg-orange-500 w-12 ml-2"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 lg:mb-0">
              Job Openings
            </h2>
            <div className="lg:max-w-xl">
              <p className="text-gray-600 mb-4">
                If You Are Committed To Building A Career In The Education
                Sector In India, Work With Us And Our Partners. We Are Always
                Looking For Individuals With A Strong Sense Of Purpose,
                Integrity And Commitment To Excellent Work.
              </p>
              <Button label={"View Opportunities >"} boxShadow={"none"} />
            </div>
          </div>
        </section>
      </main>

      <Register />
    </div>
  );
};

export default Page;
