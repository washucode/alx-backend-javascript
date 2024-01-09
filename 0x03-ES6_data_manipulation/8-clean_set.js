export default function cleanSet(set, startString) {
  const newList = [];
  if (!startString || !startString.length) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newList.push(value.slice(startString.length));
    }
  });
  return newList.join('-');
}
