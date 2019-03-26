// axios.defaults.baseURL = window.env === "prod" ? window.prodBaseUrl : window.devBaseUrl;
axios.defaults.timeout = 120000;
axios.defaults.baseURL = 'https://cdn2.jianshu.io/'

export const getFetch = async (url, params = {}) => {
  try {
    const res = await axios.get(url, params);
    return res;
  } catch (e) {
    return {
      code: -1,
      message: e.message,
      status: false,
    };
  }
};

export const postFetch = async (url, params = {}) => {
  try {
    const res = await axios.post(url, params);
    return res;
  } catch (e) {
    return {
      code: -1,
      message: e.message,
      status: false,
    };
  }
};