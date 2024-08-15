import { IChatContent } from "@/types/types";
import { minidenticon } from "minidenticons";

const genAVT = (adress: string) => {
  if (adress && adress?.length > 5) {
    const key = adress.slice(adress.length - 5, adress.length);
    return (
      "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(key, 80, 80))
    );
  } else {
    return (
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon("default", 80, 80))
    );
  }
};

function extractStringAndScripts(stringString: string): IChatContent[] {
  let remainingstring = stringString;
  let chunks: IChatContent[] = [];

  const startScriptTag = "<script";
  const endScriptTag = "</script>";

  while (remainingstring !== "") {
    const startIndex = remainingstring.indexOf(startScriptTag);
    const endIndex = remainingstring.indexOf(endScriptTag, startIndex);

    if (startIndex === -1) {
      chunks.push({ type: "string", content: remainingstring });
      remainingstring = "";
    } else if (endIndex === -1) {
      chunks.push({ type: "string", content: remainingstring });
      remainingstring = "";
    } else {
      const stringBeforeScript = remainingstring.slice(0, startIndex);
      chunks.push({ type: "string", content: stringBeforeScript });

      const scriptContent = remainingstring.slice(
        startIndex,
        endIndex + endScriptTag.length
      );

      chunks.push({
        type: "script",
        content: scriptContent,
        json: extractJSONFromHTML(scriptContent),
      });
      remainingstring = remainingstring.slice(endIndex + endScriptTag.length);
    }
  }

  return chunks;
}

function extractJSONFromHTML(html: string) {
  const pattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const scriptTags = html.match(pattern);

  if (!scriptTags) {
    return null;
  }

  for (const scriptTag of scriptTags) {
    const jsonStart = scriptTag.indexOf("{");
    const jsonEnd = scriptTag.lastIndexOf("}");

    if (jsonStart !== -1 && jsonEnd !== -1) {
      const jsonString = scriptTag.substring(jsonStart, jsonEnd + 1);
      try {
        const jsonData = JSON.parse(jsonString);
        return jsonData;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        continue;
      }
    }
  }

  return null;
}

export default { genAVT, extractStringAndScripts };
