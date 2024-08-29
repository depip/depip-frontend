import { notification } from "antd";

const BotReply = async (params: {
  prompt: string;
  sessionId: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}bedrock/bedrock-agent`,
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

export default BotReply;
