/* handle multiple successful promises */
/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';
/* eslint-enable */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body } = values[0];
      const { firstName, lastName } = values[1];
      // eslint-disable-next-line no-console
      console.log(`${body} ${firstName} ${lastName}`);
    })
    // eslint-disable-next-line no-console
    .catch(() => console.log('Signup system offline'));
}
