import axios from "axios";
import { backendUrl } from "./config";

const api = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       try {
//         // Request a new access token using the refresh token
//         const res = await axios.get(`${backendUrl}/refresh-token`, {
//           withCredentials: true,
//         });

//         // Update the failed request with the new token and retry
//         error.config.headers.Authorization = `Bearer ${res.data.token}`;
//         return api(error.config);
//       } catch (refreshError) {
//         console.error("Refresh token failed:", refreshError);
//         // Handle logout (optional)
//       }
//     }
//     return Promise.reject(error);
//   }
// );
