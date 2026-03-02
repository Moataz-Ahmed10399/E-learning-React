import axios from "axios";

const api = axios.create({
  baseURL: "https://udemyfpiti.runasp.net/api",
});

// ========================
// Request Interceptor
// ========================
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ========================
// Response Interceptor (Refresh Token)
// ========================
api.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      const oldAccessToken = localStorage.getItem("token");
      const oldRefreshToken = localStorage.getItem("refreshToken");

      try {

        const response = await axios.post(
          "https://udemyfpiti.runasp.net/api/Account/refresh-token",
          { token: oldRefreshToken },
          {
            headers: {
              Authorization: `Bearer ${oldAccessToken}`
            }
          }
        );

        // خزّن الجديد
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        // عدل الطلب القديم
        originalRequest.headers.Authorization =
          `Bearer ${response.data.jwtToken}`;

        return api(originalRequest);

      } catch (refreshError) {

         console.log("Refresh token failed:", refreshError);

        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;