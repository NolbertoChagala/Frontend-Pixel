import { apiClient } from "./apiClient";

export const login = (credentials) => {
  return apiClient.post("/login", credentials);
};

export const register = (data) => {
  return apiClient.post("/register", data);
};
