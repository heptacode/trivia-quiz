/**
 * HTTP GET Request
 * @param {string} path
 * @returns {Promise} Promise
 */
export const getRequest = async <T>(path: string): Promise<T> => {
  return (await fetch(`https://opentdb.com/api.php${path}`)).json();
};
