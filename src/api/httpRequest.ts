import axios from 'axios';

/**
 * HTTP GET Request
 * @param {string} path
 * @returns {Promise} Promise
 */
export async function getRequest<T>(path: string): Promise<T> {
  return (await axios.get(`https://opentdb.com/api.php${path}`)).data;
}
