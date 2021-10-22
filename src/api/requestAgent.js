// eslint-disable-next-line no-restricted-imports
import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;

export default {
  request: ({
    baseURL = API_HOST,
    method = 'get',
    endpoint = '',
    params = {},
    data = {},
    uri = '',
    json = true,
    headers = [{ key: null, value: null }],
  }) => {
    // ContentType
    if (json) {
      headers.push({
        key: 'Content-Type',
        value: 'application/json',
      });
    }

    let requestHeaders = {};
    if (headers.length) {
      requestHeaders = headers.reduce((pre, next) => {
        const { key, value } = next;
        if (key && value) {
          const tmp = {};
          tmp[key] = value;
          return { ...pre, ...tmp };
        }
        return pre;
      }, {});
    }

    return axios({
      headers: requestHeaders,
      withCredentials: true,
      ...(uri ? { url: uri } : { baseURL, url: endpoint }),
      ...(method.toUpperCase() === 'GET'
        ? { params }
        : { method, params, data }),
    });
  },
};
