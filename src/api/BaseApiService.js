import {
  BACKEND_KNOWN_HTTP_ERROR_CODES,
  INTERNAL_SERVER_ERROR,
} from "../utils/ErrorMessages";
import { UserSessionUtils } from "../utils/UserSessionUtils";

export class BaseApiService {
  static token = null;
  static requestHeaders = null;
  apiEndpoint;
  navigationContext;
  multiPartRequestHeaders = {
    // "Content-Type": "multipart/form-data; boundary=??",//- Upload with form data wont work if you specify this header
    bearer: UserSessionUtils.getBearerToken(),
  };

  /**
   * This is constructor is used to initialize the API service endpoint to be used for this call.
   *
   * @param apiEndpoint
   */
  constructor(apiEndpoint, navigationContext) {
    this.apiEndpoint = apiEndpoint;
    this.navigationContext = navigationContext;
  }

  /**
   * Composes auth headers before api calls
   * @returns
   */
  async composeHeaders() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      "Bearer " + (await UserSessionUtils.getBearerToken())
    );

    this.requestHeaders = headers;
    return headers;
  }

  /**
   * This method is used to make a GET api request to the provided constructor API endpoint.
   *
   * @param queryParameters
   * @returns
   */
  async getRequest(queryParameters) {
    const headers = await this.composeHeaders();
    return await fetch(
      this.apiEndpoint + "?" + new URLSearchParams(queryParameters),
      {
        method: "GET",
        headers: headers,
      }
    );
  }
  /**
   * This method is used to make a GET api request to the provided path endpoint.
   *
   * @param path
   * @returns
   */
  async getFileRequest(path) {
    await this.composeHeaders();
    return await fetch(path, {
      method: "GET",
      headers: this.requestHeaders,
    });
  }

  /**
   * This method is used to make a GET api request to the provided constructor API endpoint.
   * This returns a JSON response or redirects to the login screen if a 401 is detected.
   *
   * @param queryParameters
   * @returns
   */
  async getRequestWithJsonResponse(queryParameters) {
    return this.getRequest(queryParameters).then(async (response) => {
      if (response.ok) {
        return response.json();
      } else if (BACKEND_KNOWN_HTTP_ERROR_CODES.includes(response.status)) {
        let data = await response.json();
        let errorMessage = data?.message ?? INTERNAL_SERVER_ERROR;
        throw new TypeError(errorMessage);
      } else if (response.status === 401) {
        await UserSessionUtils.clearLocalStorageAndLogout(
          this.navigationContext
        );
      } else if (response.status === 426) {
        let data = await response.json();
        let errorMessage = data?.message ?? INTERNAL_SERVER_ERROR;
        return errorMessage;
      } else {
        throw new TypeError(INTERNAL_SERVER_ERROR);
      }
    });
  }

  /**
   * This method is used to make a POST MULTIPART API request to the provided constructor endpoint.
   *
   * @param requestBody
   * @returns
   */
  async postRequestMultiPart(requestBody) {
    return await fetch(this.apiEndpoint, {
      method: "POST",
      headers: this.multiPartthis.requestHeaders,
      body: requestBody,
      redirect: "follow",
    });
  }
  /**
   * This method is used to make a POST API request to the provided constructor endpoint.
   *
   * @param requestBody
   * @returns
   */
  async postRequest(requestBody) {
    const headers = await this.composeHeaders();
    return await fetch(this.apiEndpoint, {
      method: "POST",
      headers: headers,
      body: requestBody !== null ? JSON.stringify(requestBody) : "",
      redirect: "follow",
    });
  }

  /**
   * This method is used to make a POST API request to the provided constructor endpoint.
   * This returns a JSON response or redirects to the login screen if a 401 is detected.
   *
   * @param requestBody
   * @returns
   */
  async postRequestWithJsonResponse(requestBody) {
    return this.postRequest(requestBody).then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else if (BACKEND_KNOWN_HTTP_ERROR_CODES.includes(response.status)) {
        let data = await response.json();
        let errorMessage = data?.message ?? INTERNAL_SERVER_ERROR;
        throw new TypeError(errorMessage);
      } else if (response.status === 401) {
        await UserSessionUtils.clearLocalStorageAndLogout(
          this.navigationContext
        );
      } else {
        throw new TypeError(INTERNAL_SERVER_ERROR);
      }
    });
  }

  async postRequestWithJsonResponseAndHeaders(requestBody) {
    return this.postRequest(requestBody, this.requestHeaders).then(
      async (response) => {
        if (response.ok) {
          return { body: await response.json(), headers: response.headers };
        } else if (BACKEND_KNOWN_HTTP_ERROR_CODES.includes(response.status)) {
          let data = await response.json();
          let errorMessage = data?.message ?? INTERNAL_SERVER_ERROR;
          throw new TypeError(errorMessage);
        } else if (response.status === 401) {
          await UserSessionUtils.clearLocalStorageAndLogout(
            this.navigationContext
          );
        } else {
          throw new TypeError(INTERNAL_SERVER_ERROR);
        }
      }
    );
  }

  /**
   * This method is used to make a POST API request to the provided constructor endpoint.
   * This returns a JSON response or redirects to the login screen if a 401 is detected.
   *
   * @param requestBody
   * @returns
   */
  async postMultipartWithJsonResponse(requestBody) {
    return this.postRequestMultiPart(requestBody).then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else if (BACKEND_KNOWN_HTTP_ERROR_CODES.includes(response.status)) {
        let data = await response.json();
        let errorMessage = data?.responseMessage ?? INTERNAL_SERVER_ERROR;
        throw new TypeError(errorMessage);
      } else if (response.status === 401) {
        await UserSessionUtils.clearLocalStorageAndLogout(
          this.navigationContext
        );
      } else {
        throw new TypeError(INTERNAL_SERVER_ERROR);
      }
    });
  }

  /**
   * This method is used to obtain a refresh token from the server
   */
  async refreshTokenRequest() {
    let requestBody = { token: UserSessionUtils.getRefreshToken() };
    return await fetch(this.apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
  }

  /**
   * This method is used to make a PUT API request to the provided constructor endpoint.
   *
   * @param requestBody
   * @returns
   */
  async putRequest(requestBody, requestHeaders) {
    await this.composeHeaders();
    return await fetch(this.apiEndpoint, {
      method: "PUT",
      headers: requestHeaders,
      body: requestBody !== null ? JSON.stringify(requestBody) : "",
    });
  }

  /**
   * This method is used to make a PUT API request to the provided constructor endpoint.
   * This returns a JSON response or redirects to the login screen if a 401 is detected.
   *
   * @param requestBody
   * @returns
   */
  async putRequestWithJsonResponse(requestBody) {
    return this.putRequest(requestBody, this.requestHeaders).then(
      async (response) => {
        if (response.ok) {
          return response.json();
        } else if (BACKEND_KNOWN_HTTP_ERROR_CODES.includes(response.status)) {
          let data = await response.json();
          let errorMessage = data?.responseMessage ?? INTERNAL_SERVER_ERROR;
          throw new TypeError(errorMessage);
        } else if (response.status === 401) {
          UserSessionUtils.clearLocalStorageAndLogout();
        } else {
          throw new TypeError(INTERNAL_SERVER_ERROR);
        }
      }
    );
  }
}
