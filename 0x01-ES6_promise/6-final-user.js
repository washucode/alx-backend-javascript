/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';
/* eslint-enable */

export default function handleProfileSignup(firstName = '', lastName = '', filename = '') {
  return Promise.allSettled([uploadPhoto(filename), signUpUser(firstName, lastName)]);
}
