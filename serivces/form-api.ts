import { PIL_TYPE } from "@/models/interface.common";

const registerIpAsset = async (params: {
  nftAddress: string;
  tokenId: string;
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
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}SPG/mintAndRegistryIp`,
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

export default {
  registerIpAsset,
  licenceseTerms,
  mintLicense,
  attackPILTerms,
  mintAndRegistryIp,
};
