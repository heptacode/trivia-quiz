import axios from 'axios';
axios.defaults.baseURL = 'https://opentdb.com/api.php';

/**
 * HTTP GET Request
 * @param {string} path
 * @returns {Promise} Promise
 */
export const getRequest = async <T>(path: string): Promise<T> => {
  return (await axios.get(`/${path}`)).data;
};

/**
 * HTTP POST Request
 * @param {string} path
 * @param {any} (Optional) body
 * @returns {Promise} Promise
 */
export const postRequest = async <T>(path: string, body?: any): Promise<T> => {
  return (await axios.post(`/${path}`, body)).data;
};
