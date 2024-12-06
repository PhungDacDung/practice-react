import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://reqres.in'
});

// Add a response interceptor
baseUrl.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data ? response.data : {statusCode: response.status};
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default baseUrl

