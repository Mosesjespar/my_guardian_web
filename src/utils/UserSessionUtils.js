import StorageParams from "./StorageParams";
import { isNotEmpty } from "./UtilityMethods";

export class UserSessionUtils {
  /**
   * This method is use to set the session value of the supplied key
   *
   * @param bearerToken
   */
  static async setValue(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   * This method is use to get session value of supplied key
   *
   * @param bearerToken
   */
  static async getValue(key) {
    return localStorage.getItem(key);
  }
  /**
   * This is used to get the user's bearer token.
   *
   * @returns
   */
  static async getBearerToken() {
    const token = localStorage.getItem(StorageParams.ACCESS_TOKEN);
    return JSON.parse(token);
  }

  /**
   * This is used to get the user's refresh token.
   *
   * @returns
   */
  static async getRefreshToken() {
    return localStorage.getItem(StorageParams.REFRESH_TOKEN);
  }
  /**
   * This method is used to clear the localstorage and redirect the user to the login screen
   */
  static async clearLocalStorageAndLogout(navigationContext) {
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
  static async setUserAuthToken(bearerToken) {
    localStorage.setItem(StorageParams.ACCESS_TOKEN, bearerToken);
  }

  /**
   * This method is use to set the user's bearer token.
   *
   * @param bearerToken
   */
  static async setFullSessionObject(fullObject) {
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
  static async getFullSessionObject() {
    const value = localStorage.getItem(StorageParams.FULL_LOGIN_DETAILS_JSON);
    return JSON.parse(value);
  }
  /**
   * This method is used to get the stored expo device Id.
   */
  static async getDeviceId() {
    return localStorage.getItem(StorageParams.EXPO_DEVICE_ID);
  }

  /**
   * This method is used to store the expo device Id.
   */
  static async setDeviceId(token) {
    localStorage.setItem(StorageParams.EXPO_DEVICE_ID, token);
  }
  /**
   * This method is used to set the user's refresh token.
   *
   * @param refreshToken
   */
  static async setUserRefreshToken(refreshToken) {
    localStorage.setItem(StorageParams.REFRESH_TOKEN, refreshToken);
  }

  /**
   * This method is used to save a JSON object containing user details to local storage.
   *
   * @param userDetails
   */
  static async setUserDetails(userDetails) {
    localStorage.setItem(
      StorageParams.USER_DETAILS_JSON,
      JSON.stringify(userDetails)
    );
  }

  /**
   * This method is used to get a JSON object containing user details
   * @returns
   */
  static async getUserDetails() {
    const value = localStorage.getItem(StorageParams.USER_DETAILS_JSON);
    return JSON.parse(value);
  }

  /**
   * This method is used to get user logged in status
   * @returns
   */
  static async isLoggedIn() {
    try {
      localStorage.getItem(StorageParams.IS_LOGGED_IN).then((loggedIn) => {
        console.log("Logged in plain value>>" + loggedIn);
        if (loggedIn === true) {
          return true;
        }
        return false;
      });
    } catch (error) {
      return false;
    }
  }

  /**
   * This method is used to set user logged in status
   * @returns
   */
  static async setLoggedIn(loggedIn) {
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
  static async acceptedTermsAndConditions() {
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
  static async setAcceptedTermsAndConditions(accepted) {
    localStorage.setItem(
      StorageParams.ACCEPTED_TERMS_AND_CONDITIONS,
      accepted ? true : false
    );
  }

  /**
   * This method is used to set user txn pin
   * @param {*} pin
   */
  static async setTxnPin(pin) {
    localStorage.setItem(StorageParams.TXN_PIN, pin);
  }

  /**
   * This method is used to get user saved txn pin
   * @returns
   */
  static async getTxnPin() {
    const value = localStorage.getItem(StorageParams.TXN_PIN);
    return value;
  }
}
