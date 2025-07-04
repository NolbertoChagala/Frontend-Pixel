import { apiClient } from "./apiClient";

export const sendContactForm = (data) => {
  return apiClient.post("/contact", data);
};



// hola 