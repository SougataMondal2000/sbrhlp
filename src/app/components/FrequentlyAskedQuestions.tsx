import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How will my small contribution make a difference?",
    answer:
      "Our founder, Aarti BR Singh started Sabri Helpage with only its visionary. Today, we’re an organization that has impacted many people across India. But this would have been only a vision without YOU. Bricks by bricks we get a castle. No matter what you donate, the onus is upon us to create difference in lives of people who deserve the privilege.",
  },
  {
    question: "What is the advantage of becoming a monthly donor?",
    answer:
      "When you donate on a monthly basis, not only does that help us create a larger impact on the lives of people who are in need but also to plan our work at the grassroots level in a way that is more efficient and inclusive. Besides this, auto-recurring monthly donations also reduces the costs incurred for us to reach out to you.",
  },
  {
    question: "As a Sabri helpage monthly donor, you will get:",
    answer:
      "A hassle-free monthly donation sign up process An annual tax receipt The assurance that your donation is utilized immediately and efficiently The option to change your donation plan and unsubscribe from the plan at any time.",
  },
  {
    question: "Are donations to Sabri Helpage tax exempt?",
    answer: `Yes-all donations to Sabri Helpage are 50% exempt from tax under section 80G of the Income Tax Act. 
      <br>Note: Tax exemption is valid only in India.`,
  },
  {
    question: "How will I get a tax exemption certificate for my donation?",
    answer:
      "You will receive your donation receipt either by email or on your address – this receipt is eligible for tax exemption and can be shared with the Income Tax authorities as a valid document of proof. In case there is a change in your email ID or your address, please keep us updated with the details. ",
  },
  {
    question: "Are my online donation transactions secure?",
    answer: `The User agrees and accepts that all nuances and modalities relating to making payment using internet banking/ debit cards/credit cards, UPI or payment wallets ("Virtual Payment Mode") shall be separately governed by arrangement(s) / terms and conditions between the User and the relevant banks or payment gateways.

<br><br>We shall not be responsible, in any manner whatsoever, for any liability that may arise in relation to the Virtual Payment Modes (including any fraudulent transaction).

<br><br>While availing any of the Virtual Payment Modes available on the Website, we will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or indirectly to You due to:
<br>(a) lack of authorization for any transactions;
<br>(b) any payment issues arising out of the transaction or
<br>(c) decline of such transaction for any reason.

<br><br>SSL Encryption is used.`,
  },
  {
    question: "Does Sabri Helpage accept cash donations?",
    answer:
      "No – we as an organization do not accept any cash donations to ensure transparency and accountability. If you’d like to donate, do not make any payment in individual name or in the name of any other organization. Verify that your online or bank transfer is only issued in the name of Sabri Helpage.",
  },
  {
    question: "What are the ways in which I can donate?",
    answer: `Donate offline through any of the following ways:
<br><br>Cheques/Demand Drafts: You can send these to us either directly or contact us for a pick up.
Donate online through payment gateway.`,
  },
  {
    question: "How does Sabri Helpage raise its funds?",
    answer:
      "Sabri Helpage raises the funds that we need for our work with the help of kind hearted and empathetic individuals like you as well as through other grants by corporates and relevant institutions or government. ",
  },
  {
    question: "How does Sabri Helpage choose the projects it supports?",
    answer:
      "Our rigorous and dedicated selection process is based on the values of trust, commitment, transparency and accountability. We screen all the applications we receive for our organization, make a shortlist basis the robustness of the applicant’s current operations along with the number of years of experience and conduct a field visit so as to evaluate and shortlist applicants and extensively debate our findings through internal committee meetings. Those applicants who meet all our application criteria are recommended for approval by our board of directors, upon approval they are accepted.",
  },
  {
    question:
      "Does Sabri Helpage ensure that its projects use the allocated funds properly?",
    answer:
      "We ensure that resources are optimally used by our project partners through regular budgeting and reporting systems aided by Account Aid, a firm of chartered accountants specialized in this sector. Our program teams visit each project on a quarterly basis and conduct meetings with the staff, parents, the one who’s in need and the community to assess the project’s progress. Every project is subject to an annual evaluation before we grant them the funds for next year. ",
  },
  {
    question: "Does Sabri Helpage receive government funding?",
    answer: `Yes – As an NGO, we are entitled receive any direct government funding.
<br>The government has also extended certain tax and duty exemptions to us to help us minimize our costs and we are thankful to the Government of India for this.`,
  },
  {
    question: "Can I sponsor an individual through Sabri Helpage?",
    answer:
      "Yes, you can sponsor an individual through Sabri Helpage. Subject to condition to the verification and genuinety of the case. For details regarding this you contact us at support@sabrihelpage.org ",
  },
  {
    question: "How do we allocate funds that we receive through donation?",
    answer: `In order to achieve sustainable impact, we have to pool all the donations that we receive and allocate them to the different projects and programs we support.
<br><br>This helps us ensure that there is no differentiation between the help received among two individuals and that your money is able to create long-term change for many individuals.`,
  },
  {
    question:
      "Why doesn’t Sabri Helpage disclose the names of beneficiaries to donors?",
    answer: `We believe that every individual is entitled to their privacy as well and we take measures to maintain their need for anonymity very seriously.
<br><br>However, while the names of individuals are withheld, we encourage you to visit our projects so that you can experience the impact that your donation is being able to create in their lives!`,
  },
  {
    question: "Are Sabri Helpage employees paid for their work?",
    answer: `Yes, in Sabri Helpage our full-time/part-time employees are given regular salaries – we believe that this is important to attract as well as value the professional talent we need to manage our activities effectively.
<br><br>However, it is important to take into note that Sabri Helpage salaries are modest in comparison with other commercial corporate organizations since we run largely on donations.`,
  },
  {
    question:
      "Does Sabri Helpage partner with third party channels to raise funds?",
    answer: `Yes, we do have external channel partners that are extensively involved in helping us raise funds through face-to-face marketing,
communicating and
tele-calling. Each such representative has an unique ID with the Sabri Helpage logo and office address and is authorized by the organization to collect donations through cheques/demand drafts/digital mediums only – and never in cash.
If you would like to reconfirm the authenticity of someone who has approached you on behalf of Sabri Helpage,
please feel free to verify them from the website.`,
  },
  {
    question: "What is Sabri Helpage’s donation refund policy?",
    answer:
      "Sabri Helpage is committed to take utmost care to process your donations as per the instructions that we receive from you (however, the final decision regarding the fund allocation is vested on the governing body). Donations once made cannot be refunded by us since they’re immediately put to work for individuals who are in need.",
  },
  {
    question: "How do I make changes or discontinue my monthly mandate?",
    answer:
      "Please send us an email on our official mail-id for any changes in mandate or to discontinue your mandate.",
  },
  {
    question:
      "Does Sabri Helpage partner with third party channels to raise funds?",
    answer:
      "Yes, we do have external channel partners that are extensively involved in helping us raise funds through face-to-face marketing, communicating and tele-calling. Each such representative has an unique ID with the Sabri Helpage logo and office address and is authorized by the organization to collect donations through cheques/demand drafts/digital mediums only – and never in cash. If you would like to reconfirm the authenticity of someone who has approached you on behalf of Sabri Helpage, please feel free to verify them from the website.",
  },
];

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <p
          className="mt-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
};

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-[10                                                                                                                                                                                                                                                                                                                                           00px] mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
