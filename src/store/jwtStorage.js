/**
 * @description The storage item name or jwt token
 * @type {string}
 */
const JWT = 'jobs-tracking-token';

/**
 * @description get item from localStorage
 * @return {String}
 */
const getJWT = () => localStorage.getItem(JWT);

/**
 * @description Set value for jwt token to localStorage
 * @param {String} value item value
 */
const setJWT = (value) => {
  localStorage.setItem(JWT, value);
};

/**
 * @description remove jwt from localStorage
 */
const removeJWT = () => {
  localStorage.removeItem(JWT);
};

/**
 * @description Check is jwt token exist in localStorage
 * @param {String} itemName item name
 * @return {Boolean}
 */
const exists = () => {
  const item = getJWT(JWT);
  return item !== null;
};

export default {
  getJWT,
  setJWT,
  removeJWT,
  exists
};
