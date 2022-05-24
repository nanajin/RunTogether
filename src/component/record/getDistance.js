export const getDistance = (pos1, pos2) => {
  const theta = pos1.longitude - pos2.longitude;
  let dist =
    Math.sin((pos1.latitude * Math.PI) / 180) *
      Math.sin((pos2.latitude * Math.PI) / 180) +
    Math.cos((pos1.latitude * Math.PI) / 180) *
      Math.cos((pos2.latitude * Math.PI) / 180) *
      Math.cos((theta * Math.PI) / 180);

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344;

  return Math.round(dist * 100) / 100;
};
