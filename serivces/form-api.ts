import { PIL_TYPE } from "@/types/types";


const registerIpAsset = async (params: {
  nftAddress: string;
  tokenId: string;
  userWallet: "string";
  session: {};
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}ipasset/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

const licenceseTerms = async (params: {
  ipId: string;
  currency: string;
  type: PIL_TYPE;
  mintingFee: number;
  userWallet: "string";
  session: {};
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}licenceseTerms/registerPILTerms`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

const mintLicense = async (params: {
  licensorIpId: string;
  licenseTermsId: string;
  receiver: string;
  amount: 0;
  userWallet: "string";
  session: {};
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}license/mintLicense`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

const attackPILTerms = async (params: { ipId: string; termId: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}licenceseTerms/attackPILTerms`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

const mintAndRegistryIp = async (params: {
  name: string;
  description: string;
  recipient: string;
  file: File;
  userWallet: "string";
  session: {};
}) => {
  try {
    const formData = new FormData();
    formData.append("file", params.file);
    formData.append("name", params.name);
    formData.append("description", params.description);
    formData.append("recipient", params.recipient);
    formData.append("userWallet", params.userWallet);
    formData.append("session", JSON.stringify(params.session));
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}SPG/mintAndRegistryIp`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

export default {
  registerIpAsset,
  licenceseTerms,
  mintLicense,
  attackPILTerms,
  mintAndRegistryIp,
};
