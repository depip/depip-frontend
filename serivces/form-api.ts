import { PIL_TYPE } from "@/constant/constant";
import { notification } from "antd";

const registerIpAsset = async (params: {
  nftAddress: string;
  tokenId: string;
  userWallet: "string";
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
    notification.error({
      message: "Could not get data",
    });
    return false;
  }
};

const registerPILTerms = async (params: {
  ipId: string;
  currency: string;
  type: PIL_TYPE;
  mintingFee: string;
  userWallet?: string;
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
    notification.error({
      message: "Could not get data",
    });
    return false;
  }
};

const mintLicense = async (params: {
  licensorIpId: string;
  licenseTermsId: string;
  receiver: string;
  amount: number;
  session?: {},
  userWallet?: "string"
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
    notification.error({
      message: "Could not get data",
    });
    return false;
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
    notification.error({
      message: "Could not get data",
    });
    return false;
  }
};

const mintAndRegistryIp = async (params: {
  name: string;
  description: string;
  recipient: string;
  file: File;
  userWallet: "string";
}) => {
  try {
    const formData = new FormData();
    formData.append("file", params.file);
    formData.append("name", params.name);
    formData.append("description", params.description);
    formData.append("recipient", params.recipient);
    formData.append("userWallet", params.userWallet);
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
    notification.error({
      message: "Could not get data",
    });
    return false;
  }
};

export default {
  registerIpAsset,
  registerPILTerms,
  mintLicense,
  attackPILTerms,
  mintAndRegistryIp,
};
