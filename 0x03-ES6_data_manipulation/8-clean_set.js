export default function cleanSet(set, startString) {
  const newList = [];
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newList.push(value.slice(startString.length));
    }
  });
  return newList.join('-');
}
