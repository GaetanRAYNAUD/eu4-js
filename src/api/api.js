import axios from 'axios';
import * as ENV from 'config/env';

import endpoints from './endpoints';

axios.defaults.baseURL = ENV.API_BASE_URL;
axios.defaults.timeout = 60000;

const ws = axios.create({ maxRedirects: 0 });

ws.interceptors.response.use(
  async response => {
    console.log(response);

    return response
  },
  async (error) => {
    if (error.response) {
      console.log("error response", error.response)
    } else {
      console.log("error", error)
    }
    throw error
  }
);

const api = {
  save: {
    parse: (form) => {
      return ws.post(endpoints.save.parse, form);
    },
    convert: (data) => {
      return ws.post(endpoints.save.convert, data);
    }
  }
};

export default api
