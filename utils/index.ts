import { minidenticon } from 'minidenticons'

export default function genAVT(adress: string) {
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
}
