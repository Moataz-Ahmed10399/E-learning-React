import api from "../Api/instance";

export const login = async (data) => {
  const res = await api.post("/Account/login", data);
  return res.data;
};

export const registerStudent = async (data) => {
  const res = await api.post("/Account/register-student", data);
  return res.data;
};

export const registerInstructor = async (data) => {
  const res = await api.post("/Account/register-instructor", data);
  return res.data;
};

export const refreshToken = async (refreshToken, accessToken) => {
  const res = await api.post(
    "/Account/refresh-token",
    { token: refreshToken },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  return res.data;
};