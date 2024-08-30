import StorageParams from "./StorageParams";
import { isNotEmpty } from "./UtilityMethods";

export class UserSessionUtils {
  /**
   * This method is use to set the session value of the supplied key
   *
   * @param bearerToken
   */
  static setValue(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   * This method is use to get session value of supplied key
   *
   * @param bearerToken
   */
  static getValue(key) {
    return localStorage.getItem(key);
  }
  /**
   * This is used to get the user's bearer token.
   *
   * @returns
   */
  static getBearerToken() {
    const token = localStorage.getItem(StorageParams.ACCESS_TOKEN);
    return JSON.parse(token);
  }

  /**
   * This is used to get the user's refresh token.
   *
   * @returns
   */
  static getRefreshToken() {
    return localStorage.getItem(StorageParams.REFRESH_TOKEN);
  }
  /**
   * This method is used to clear the localstorage and redirect the user to the login screen
   */
  static clearLocalStorageAndLogout(navigationContext) {
    if (isNotEmpty(navigationContext)) {
      // remove all
      localStorage.clear();
    }
  }

  /**
   * This method is use to set the user's bearer token.
   *
   * @param bearerToken
   */
  static setUserAuthToken(bearerToken) {
    localStorage.setItem(StorageParams.ACCESS_TOKEN, bearerToken);
  }

  /**
   * This method is use to set the user's bearer token.
   *
   * @param bearerToken
   */
  static setFullSessionObject(fullObject) {
    localStorage.setItem(
      StorageParams.FULL_LOGIN_DETAILS_JSON,
      JSON.stringify(fullObject)
    );
  }

  /**
   * This method is use to set the user's bearer token.
   *
   * @param bearerToken
   */
  static getFullSessionObject() {
    const value = localStorage.getItem(StorageParams.FULL_LOGIN_DETAILS_JSON);
    return JSON.parse(value);
  }
  /**
   * This method is used to get the stored expo device Id.
   */
  static getDeviceId() {
    return localStorage.getItem(StorageParams.EXPO_DEVICE_ID);
  }

  /**
   * This method is used to store the expo device Id.
   */
  static setDeviceId(token) {
    localStorage.setItem(StorageParams.EXPO_DEVICE_ID, token);
  }
  /**
   * This method is used to set the user's refresh token.
   *
   * @param refreshToken
   */
  static setUserRefreshToken(refreshToken) {
    localStorage.setItem(StorageParams.REFRESH_TOKEN, refreshToken);
  }

  /**
   * This method is used to save a JSON object containing user details to local storage.
   *
   * @param userDetails
   */
  static setUserDetails(userDetails) {
    localStorage.setItem(
      StorageParams.USER_DETAILS_JSON,
      JSON.stringify(userDetails)
    );
  }

  /**
   * This method is used to get a JSON object containing user details
   * @returns
   */
  static getUserDetails() {
    const value = localStorage.getItem(StorageParams.USER_DETAILS_JSON);
    return JSON.parse(value);
  }

  /**
   * This method is used to get user logged in status
   * @returns
   */
  static isLoggedIn() {
    const bool = localStorage.getItem(StorageParams.IS_LOGGED_IN);
    return bool === "true";
  }

  /**
   * This method is used to set user logged in status
   * @returns
   */
  static setLoggedIn(loggedIn) {
    if (loggedIn) {
      localStorage.setItem(StorageParams.IS_LOGGED_IN, true);
    } else {
      localStorage.setItem(StorageParams.IS_LOGGED_IN, false);
    }
  }

  /**
   * This method is used to get user logged in status
   * @returns
   */
  static acceptedTermsAndConditions() {
    try {
      localStorage
        .getItem(StorageParams.ACCEPTED_TERMS_AND_CONDITIONS)
        .then((response) => {
          return response === true;
        });
    } catch (error) {
      return false;
    }
  }

  /**
   * This method is used to set user logged in status
   * @returns
   */
  static setAcceptedTermsAndConditions(accepted) {
    localStorage.setItem(
      StorageParams.ACCEPTED_TERMS_AND_CONDITIONS,
      accepted ? true : false
    );
  }

  /**
   * This method is used to set user txn pin
   * @param {*} pin
   */
  static setTxnPin(pin) {
    localStorage.setItem(StorageParams.TXN_PIN, pin);
  }

  /**
   * This method is used to get user saved txn pin
   * @returns
   */
  static getTxnPin() {
    const value = localStorage.getItem(StorageParams.TXN_PIN);
    return value;
  }
}
