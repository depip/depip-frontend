import { notification } from "antd";

const listAll = async (param) => {
  try {
    const url = "https://edge.stg.storyprotocol.net/api/v1/assets";
    const apiKey = "D-P66oBXaF9BA_2OtPIq3Y5MnJM=";
    const chainId = "1513";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "X-CHAIN": chainId,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
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

const getImg = async (id, tokenId) => {
  try {
    const url = `https://api.simplehash.com/api/v0/nfts/story-testnet/${id}/${tokenId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-API-Key": "storyprotoco_sk_3fclYjm1pegXwL6n5PX",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
export default {
  listAll,
  getImg
};
