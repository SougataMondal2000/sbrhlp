"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { baseURL } from "../../src/app/baseurl";

interface SupportingDocumentation {
  lettersOfRecommendation: string[];
  photographs: string[];
  videos: string[];
  publications: string[];
  otherEvidence: string[];
}

interface AdditionalInformation {
  futurePlans?: string;
  challengesFaced?: string;
  otherRelevantInfo?: string;
}

interface NomineeFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organizationOrAffiliation?: string;
  awardCategory:
    | "Elderly Care"
    | "Girl Child Education"
    | "Child Rights"
    | "LGBTQ Activist"
    | "Environmental Conservationist"
    | "Helping Blind People"
    | "Other";
  customAwardCategory?: string;
  nomineesAchievements: string;
  supportingDocumentation: SupportingDocumentation;
  nomineesMotivation: string;
  additionalInformation: AdditionalInformation;
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

const NomineeForm: React.FC = () => {
  const [formData, setFormData] = useState<NomineeFormData>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    organizationOrAffiliation: "",
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
      if (name.includes(".")) {
        const [parentKey, childKey] = name.split(".") as [
          keyof NomineeFormData,
          string
        ];
        const parentValue = prevData[parentKey];

        if (typeof parentValue === "object" && parentValue !== null) {
          return {
            ...prevData,
            [parentKey]: {
              ...parentValue,
              [childKey]: isCheckbox
                ? (e.target as HTMLInputElement).checked
                : value,
            },
          };
        }
      }

      if (name in prevData.socialMediaLinks) {
        return {
          ...prevData,
          socialMediaLinks: {
            ...prevData.socialMediaLinks,
            [name]: value,
          },
        };
      }
      if (name in prevData.websiteLinks) {
        return {
          ...prevData,
          websiteLinks: {
            ...prevData.websiteLinks,
            [name]: value,
          },
        };
      }

      return {
        ...prevData,
        [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
      } as NomineeFormData;
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
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Nominee Form</h2>

      <label htmlFor="fullName" className="block mb-2">
        Full Name:
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label htmlFor="phoneNumber" className="block mb-2">
        Phone Number:
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label htmlFor="emailAddress" className="block mb-2">
        Email Address:
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label htmlFor="organizationOrAffiliation" className="block mb-2">
        Organization or Affiliation:
        <input
          type="text"
          id="organizationOrAffiliation"
          name="organizationOrAffiliation"
          value={formData.organizationOrAffiliation || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </label>

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

      {formData.awardCategory === "Other" && (
        <label htmlFor="customAwardCategory" className="block mb-2">
          Custom Award Category:
          <input
            type="text"
            id="customAwardCategory"
            name="customAwardCategory"
            value={formData.customAwardCategory || ""}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
      )}

      <label htmlFor="nomineesAchievements" className="block mb-2">
        Nominee&apos;s Achievements:
        <textarea
          id="nomineesAchievements"
          name="nomineesAchievements"
          value={formData.nomineesAchievements}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label htmlFor="nomineesMotivation" className="block mb-2">
        Nominee&apos;s Motivation:
        <textarea
          id="nomineesMotivation"
          name="nomineesMotivation"
          value={formData.nomineesMotivation}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label htmlFor="termsAndConditions" className="block mb-2">
        Terms and Conditions:
        <textarea
          id="termsAndConditions"
          name="termsAndConditions"
          value={formData.termsAndConditions}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label htmlFor="consentGiven" className="block mb-2">
        Consent Given:
        <input
          type="checkbox"
          id="consentGiven"
          name="consentAndAuthorization.consentGiven"
          checked={formData.consentAndAuthorization.consentGiven}
          onChange={handleChange}
          className="mr-2"
        />
      </label>

      <label htmlFor="permissionForPublicity" className="block mb-2">
        Permission for Publicity:
        <input
          type="checkbox"
          id="permissionForPublicity"
          name="consentAndAuthorization.permissionForPublicity"
          checked={formData.consentAndAuthorization.permissionForPublicity}
          onChange={handleChange}
          className="mr-2"
        />
      </label>

      <label htmlFor="socialMediaLinks" className="block mb-2">
        Social Media Links:
        <input
          type="text"
          id="facebook"
          name="socialMediaLinks.facebook"
          placeholder="Facebook"
          value={formData.socialMediaLinks.facebook || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          id="instagram"
          name="socialMediaLinks.instagram"
          placeholder="Instagram"
          value={formData.socialMediaLinks.instagram || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          id="linkedin"
          name="socialMediaLinks.linkedin"
          placeholder="LinkedIn"
          value={formData.socialMediaLinks.linkedin || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          id="pinterest"
          name="socialMediaLinks.pinterest"
          placeholder="Pinterest"
          value={formData.socialMediaLinks.pinterest || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          id="twitter"
          name="socialMediaLinks.twitter"
          placeholder="Twitter"
          value={formData.socialMediaLinks.twitter || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          id="youtube"
          name="socialMediaLinks.youtube"
          placeholder="YouTube"
          value={formData.socialMediaLinks.youtube || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
      </label>

      <label htmlFor="websiteLinks" className="block mb-2">
        Website Links:
        <input
          type="text"
          id="organizationWebsite"
          name="websiteLinks.organization"
          placeholder="Organization Website"
          value={formData.websiteLinks.organization || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          id="personalWebsite"
          name="websiteLinks.personalOrOther"
          placeholder="Personal or Other Website"
          value={formData.websiteLinks.personalOrOther || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
        />
      </label>

      <button type="submit" className="bg-[#FF7536] text-white p-2 rounded">
        Submit Nominee
      </button>
    </form>
  );
};

export default NomineeForm;
