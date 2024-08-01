import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import Partners from "../sections/Partners";

const Page: React.FC = () => {
  return (
    <main className="bg-[#F8F5F4]">
      {/* <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div> */}
      <div className="lg:max-w-4xl lg:mx-auto mx-4">
        <h1 className="text-3xl font-bold my-6">Terms and Conditions</h1>

        <section className="mb-8">
          <p className="mb-4">
            Sabri Helpage maintains the right, at any moment, to modify these
            terms and conditions by publishing updates online. You agree to the
            updated terms of this agreement when you use this website after they
            are posted. You consent to using this website solely for legitimate
            purposes and in a way that doesn&apos;t violate anyone else&apos;s
            rights or prevent others from using or enjoying it.
          </p>
          <p className="mb-4">
            This website and all of the content—including names, images, photos,
            and logos—about or associated with Sabri Helpage are offered
            &quot;as is,&quot; with no endorsements or representations made, and
            without any kind of implied or explicit warranty. Under no
            circumstances will Sabri Helpage be responsible for any damages,
            including but not limited to indirect or consequential damages, or
            any other damages resulting from using the site, from loss of use
            thereof, or from any other cause, whether through negligence or
            otherwise.
          </p>
          <p>
            Sabri Helpage disclaims any warranty regarding the accuracy,
            dependability, or uninterrupted operation of the functions contained
            in the site&apos;s content, the correction of errors, the virus-free
            status of the site and the server that hosts it, or the
            representation of the content&apos;s complete functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Copyright Policy</h2>
          <p className="mb-4">
            It is completely forbidden to utilize any of the presented items for
            commercial purposes or to publish them without first obtaining
            permission from the Sabri Helpage. Nothing on this page should be
            interpreted as granting the Sabri Helpage permission to utilize any
            of the items on exhibit.
          </p>
          <p>
            Documents may only be copied for personal use provided that the
            complete document is reproduced, no changes are made, and copyright
            and source information are copied as well. Nonetheless, certain
            records and images have been posted on this website with the consent
            of the appropriate copyright holders, who are not associated with
            Sabri Helpage. These documents are protected by copyright;
            permission to copy them must be obtained from the owners of the
            copyright (the sources are listed in the papers/photographs).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Websites</h2>
          <p>
            The content of external websites is not within the control of Sabri
            Helpage. Sabri Helpage has no control over other websites that it
            links to; they are run and owned by outside parties. The inclusion
            of links to external websites does not imply endorsement or approval
            by Sabri Helpage of any other third-party website or its contents.
            We disclaim all responsibility for any claims, information, goods,
            or services that are posted on or made available by any websites
            that are owned or run by other parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Governing Law And Jurisdiction/Waiver Of Jury Trial
          </h2>
          <p>
            These Terms of Use and any claim or dispute arising out of, relating
            to or in connection with these Terms of Use or the transactions
            completed hereby, whether in contract, tort or otherwise, shall be
            governed by or construed in accordance with the laws of INDIA
            without giving effect to its conflicts of law principles. Each party
            irrevocably consents and agrees that any legal action, suit or
            proceeding against either of them arising out of, related to or in
            connection with the transaction contemplated hereby or disputes
            relating hereto may be brought only in Calcutta High Court, for the
            district of Kolkata, or if such court does not have jurisdiction, in
            the courts of the Kolkata, located in INDIA and hereby irrevocably
            accepts and submits to the exclusive jurisdiction of the aforesaid
            courts in person, with respect to any such action, suit or
            proceeding.
          </p>
        </section>

        <section>
          <p className="mb-4">
            The use of this website must end right away if these terms and
            conditions are not acknowledged in full.
          </p>
          <p>
            Sabri Helpage can be found registered at:
            <br />
            7B Mysore Road, Rashbehari Avenue,
            <br />
            Kolkata – 700033
            <br />
            Mobile no: 9674536860
          </p>
        </section>
      </div>

      <Joinus />
      <Partners />
      <Donate />
    </main>
  );
};

export default Page;
