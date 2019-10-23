/* eslint no-param-reassign: off */

import axios from 'axios';

export const baseURL = 'http://morty.mockable.io/';

export const apiClient = axios.create({
  baseURL: baseURL,
});
