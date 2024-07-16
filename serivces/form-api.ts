const registerIpAsset = async (params: { nftAddress: string; tokenId: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}ipasset/register`,
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

export default registerIpAsset;
