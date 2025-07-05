import { apiClient } from "./apiClient"; // tu axios configurado

export const fetchUsers = () => apiClient.get("/users");
export const fetchLeads = () => apiClient.get("/contact");

export const updateLeadStatus = (id, status) =>
  apiClient.patch(`/contact/${id}/status`, { status });