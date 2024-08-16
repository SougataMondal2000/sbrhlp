"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { baseURL } from "@/app/baseurl";

interface NomineeFormData {
  nomineeInformation: {
    fullName: string;
    contactDetails: {
      phoneNumber: string;
      emailAddress: string;
    };
    organizationOrAffiliation?: string;
  };
  awardCategory: string;
  customAwardCategory?: string;
  nomineesAchievements: string;
  supportingDocumentation: {
    lettersOfRecommendation: string[];
    photographs: string[];
    videos: string[];
    publications: string[];
    otherEvidence: string[];
  };
  nomineesMotivation: string;
  additionalInformation: {
    futurePlans?: string;
    challengesFaced?: string;
    otherRelevantInfo?: string;
  };
  termsAndConditions: string;
  consentAndAuthorization: {
    consentGiven: boolean;
    permissionForPublicity: boolean;
  };
  socialMediaLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    pinterest?: string;
    twitter?: string;
    youtube?: string;
  };
  websiteLinks: {
    organization?: string;
    personalOrOther?: string;
  };
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<NomineeFormData>({
    nomineeInformation: {
      fullName: "",
      contactDetails: {
        phoneNumber: "",
        emailAddress: "",
      },
      organizationOrAffiliation: "",
    },
    awardCategory: "Elderly Care",
    nomineesAchievements: "",
    supportingDocumentation: {
      lettersOfRecommendation: [],
      photographs: [],
      videos: [],
      publications: [],
      otherEvidence: [],
    },
    nomineesMotivation: "",
    additionalInformation: {},
    termsAndConditions: "",
    consentAndAuthorization: {
      consentGiven: false,
      permissionForPublicity: false,
    },
    socialMediaLinks: {},
    websiteLinks: {},
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setFormData((prevData) => {
      const newData = { ...prevData };
      const keys = name.split(".");
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = isCheckbox
        ? (e.target as HTMLInputElement).checked
        : value;

      return newData;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseURL}/sociofareNominee`,
        formData
      );
      console.log("Nominee submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting nominee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Nominee Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block mb-2">
            Full Name:
            <input
              type="text"
              id="fullName"
              name="nomineeInformation.fullName"
              value={formData.nomineeInformation.fullName}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block mb-2">
            Phone Number:
            <input
              type="text"
              id="phoneNumber"
              name="nomineeInformation.contactDetails.phoneNumber"
              value={formData.nomineeInformation.contactDetails.phoneNumber}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="emailAddress" className="block mb-2">
            Email Address:
            <input
              type="email"
              id="emailAddress"
              name="nomineeInformation.contactDetails.emailAddress"
              value={formData.nomineeInformation.contactDetails.emailAddress}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="organizationOrAffiliation" className="block mb-2">
            Organization or Affiliation:
            <input
              type="text"
              id="organizationOrAffiliation"
              name="nomineeInformation.organizationOrAffiliation"
              value={
                formData.nomineeInformation.organizationOrAffiliation || ""
              }
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>

        <div>
          <label htmlFor="awardCategory" className="block mb-2">
            Award Category:
            <select
              id="awardCategory"
              name="awardCategory"
              value={formData.awardCategory}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Elderly Care">Elderly Care</option>
              <option value="Girl Child Education">Girl Child Education</option>
              <option value="Child Rights">Child Rights</option>
              <option value="LGBTQ Activist">LGBTQ Activist</option>
              <option value="Environmental Conservationist">
                Environmental Conservationist
              </option>
              <option value="Helping Blind People">Helping Blind People</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        {formData.awardCategory === "Other" && (
          <div>
            <label htmlFor="customAwardCategory" className="block mb-2">
              Custom Award Category:
              <input
                type="text"
                id="customAwardCategory"
                name="customAwardCategory"
                value={formData.customAwardCategory || ""}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded"
                required
              />
            </label>
          </div>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="nomineesAchievements" className="block mb-2">
          Nominee's Achievements:
          <textarea
            id="nomineesAchievements"
            name="nomineesAchievements"
            value={formData.nomineesAchievements}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
            rows={4}
          />
        </label>
      </div>

      <div className="mt-4">
        <label htmlFor="nomineesMotivation" className="block mb-2">
          Nominee's Motivation:
          <textarea
            id="nomineesMotivation"
            name="nomineesMotivation"
            value={formData.nomineesMotivation}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
            rows={4}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="futurePlans" className="block mb-2">
            Future Plans:
            <textarea
              id="futurePlans"
              name="additionalInformation.futurePlans"
              value={formData.additionalInformation.futurePlans || ""}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              rows={3}
            />
          </label>
        </div>

        <div>
          <label htmlFor="challengesFaced" className="block mb-2">
            Challenges Faced:
            <textarea
              id="challengesFaced"
              name="additionalInformation.challengesFaced"
              value={formData.additionalInformation.challengesFaced || ""}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              rows={3}
            />
          </label>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="otherRelevantInfo" className="block mb-2">
          Other Relevant Information:
          <textarea
            id="otherRelevantInfo"
            name="additionalInformation.otherRelevantInfo"
            value={formData.additionalInformation.otherRelevantInfo || ""}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            rows={3}
          />
        </label>
      </div>

      <div className="mt-4">
        <label htmlFor="termsAndConditions" className="block mb-2">
          Terms and Conditions:
          <textarea
            id="termsAndConditions"
            name="termsAndConditions"
            value={formData.termsAndConditions}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
            rows={4}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="consentGiven" className="flex items-center mb-2">
            <input
              type="checkbox"
              id="consentGiven"
              name="consentAndAuthorization.consentGiven"
              checked={formData.consentAndAuthorization.consentGiven}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Consent Given
          </label>
        </div>

        <div>
          <label
            htmlFor="permissionForPublicity"
            className="flex items-center mb-2"
          >
            <input
              type="checkbox"
              id="permissionForPublicity"
              name="consentAndAuthorization.permissionForPublicity"
              checked={formData.consentAndAuthorization.permissionForPublicity}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Permission for Publicity
          </label>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Social Media Links:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "facebook",
            "instagram",
            "linkedin",
            "pinterest",
            "twitter",
            "youtube",
          ].map((platform) => (
            <div key={platform}>
              <input
                type="text"
                id={platform}
                name={`socialMediaLinks.${platform}`}
                placeholder={
                  platform.charAt(0).toUpperCase() + platform.slice(1)
                }
                value={
                  formData.socialMediaLinks[
                    platform as keyof typeof formData.socialMediaLinks
                  ] || ""
                }
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded mb-2"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Website Links:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="organizationWebsite"
              name="websiteLinks.organization"
              placeholder="Organization Website"
              value={formData.websiteLinks.organization || ""}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="personalWebsite"
              name="websiteLinks.personalOrOther"
              placeholder="Personal or Other Website"
              value={formData.websiteLinks.personalOrOther || ""}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-[#FF7536] text-white p-3 rounded w-full"
        >
          Submit Nominee
        </button>
      </div>
    </form>
  );
};

export default Page;
