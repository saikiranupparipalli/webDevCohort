import axios from "axios";
import { tokenStore } from "./tokenStore.js";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: BASE_URL, // FIX: was `baseURL: baseURL` (undefined variable)
  headers: {
    "Content-Type": "application/json", // FIX: header name casing
  },
});

// Attach access token to every outgoing request
api.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// FIX: this must be attached to `api`, not the global `axios` import,
// otherwise it never fires for requests made through `api`.
api.interceptors.response.use(
  (response) => {
    // Unwrap so every caller gets the JSON body directly,
    // e.g. `const data = await api.post(...)` instead of `res.data`.
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Access token missing/expired/invalid.
      // (You can swap this alert for a redirect-to-login / token-refresh flow later.)
      alert("Session expired. Please log in again.");
      tokenStore.clear();
    }
    // Reject with the full error (not just error.message) so callers
    // can still inspect error.response.status / error.response.data.
    return Promise.reject(error);
  }
);