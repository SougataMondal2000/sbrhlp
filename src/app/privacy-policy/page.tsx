import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import Partners from "../sections/Partners";

const page: React.FC = () => {
  return (
    <main className="bg-[#F8F5F4]">
      <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:max-w-4xl lg:mx-auto mx-4">
        <h1 className="text-3xl font-bold my-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Information Collection
          </h2>
          <p>Sabri Helpage obtains user information when the user:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Donates Something</li>
            <li>Participates in a campaign</li>
            <li>Registers to get updates</li>
          </ul>
          <p>
            To ensure legitimate donations, we require the following personal
            information:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Your Name</li>
            <li>Your postal address and email address</li>
            <li>Your contact number</li>
            <li>Details of your payment processing</li>
            <li>Any further information if needed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Use of Personal Information
          </h2>
          <p>
            Sabri Helpage does not gather or track personal information unless
            the user decides to provide it. We collect information when you
            submit a request, register for our information sheet, or express
            interest in becoming a donor, volunteer, intern, employee, partner,
            or self-nominee for The SocioFare Awards.
          </p>
          <p>
            No business or organization outside of Sabri Helpage receives,
            shares, rents, or distributes this personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Email Privacy</h2>
          <p>
            Sabri Helpage adds people to its email database who sign up for its
            mailing lists through its website or campaign engagements. The
            addresses on our lists are never sold, rented, leased, borrowed, or
            traded.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Information</h2>
          <p>
            Sabri Helpage uses cookies to enhance user experience. Users can
            adjust their browser settings to manage cookie behavior. Blocking
            cookies may affect the functionality of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Web Services</h2>
          <p>
            We use external services like YouTube for content display. We are
            not responsible for how these services collect data. Our website
            also includes links to other websites not covered by this privacy
            policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Policy Modifications</h2>
          <p>
            Sabri Helpage reserves the right to update its privacy policy. We
            will notify users of any changes in a timely manner.
          </p>
          <p>For questions, please contact us at support@sabrihelpage.org</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Refunds and Cancellations Policy
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Online donations are non-refundable and cannot be cancelled.
            </li>
            <li>Cash or money refunds are not permitted.</li>
            <li>In-kind support goes to the poorest communities.</li>
            <li>
              All donations go towards elderly care, mental health awareness,
              and children and women welfare.
            </li>
          </ul>
        </section>
      </div>

      <Joinus />
      <Partners />
      <Donate />
    </main>
  );
};

export default page;
