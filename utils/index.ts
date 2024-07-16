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

function extractScriptAndRemaining(htmlString) {
  const scriptStart = htmlString.indexOf("<script");
  const scriptEnd = htmlString.indexOf("</script>") + "</script>".length;

  if (scriptStart === -1 || scriptEnd === -1) {
    return {
      scriptContent: "",
      remainingHtml: htmlString,
    };
  }

  const scriptContent = htmlString.substring(scriptStart, scriptEnd);
  const cleanScriptContent = scriptContent.replace(
    /<script[^>]*>|<\/script>/gi,
    ""
  );

  const remainingHtml =
    htmlString.substring(0, scriptStart) + htmlString.substring(scriptEnd);

  return {
    scriptContent: cleanScriptContent,
    remainingHtml,
  };
}

export default { genAVT, extractScriptAndRemaining };
