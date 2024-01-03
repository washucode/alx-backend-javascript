export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  /* eslint-disable-next-line */
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
