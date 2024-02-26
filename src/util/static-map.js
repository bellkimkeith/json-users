import { REACT_APP_MAP_API } from "@env";

export function getStaticMap(lat, lng) {
  const apiKey = REACT_APP_MAP_API;
  const mapPreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=1&size=400x200&maptype=roadmap&&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${apiKey}`;

  return mapPreview;
}
