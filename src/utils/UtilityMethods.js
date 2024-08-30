export function isEmpty(anyValue) {
  if (anyValue === undefined || anyValue === null || anyValue === "") {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true if provided value has contents ie non-null and undefined
 * @param {*} anyValue
 * @returns
 */
export function isNotEmpty(anyValue) {
  return !isEmpty(anyValue);
}

export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
