export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    /* eslint-disable */
    (true) ? resolve() : reject(
      new Error('The promise was rejected')
    );
    /* eslint-enable */
  });
}
