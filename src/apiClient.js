/* eslint no-param-reassign: off */

import axios from "axios";

// export const baseURL = 'http://morty.mockable.io/';
export const baseURL = "https://mockserverforloanrates.free.beeceptor.com";

export const apiClient = axios.create({
  baseURL: baseURL
});
