import { api } from "./api.js";
import { tokenStore } from "./tokenStore.js";

export const authService = {
  async register({ name, email, password }) {
    // FIX: api's response interceptor already unwraps to response.data,
    // so `data` IS the payload — don't destructure `{data}` from it.
    const data = await api.post("/auth/register", { name, email, password });
    tokenStore.set(data);
    return data;
  },

  async login({ email, password }) {
    const data = await api.post("/auth/login", { email, password });
    tokenStore.set(data);
    return data;
  },

  async logout() {
    const refreshToken = tokenStore.getRefresh();
    await api.post("/auth/logout", { refreshToken }); // backend expects refreshToken in body
    tokenStore.clear();
  },

  async getProfile() {
    // FIX: was `const [data] = await api.get('/user/profile', bearer, {...})`
    // — array-destructured a non-array and passed garbage args.
    // The request interceptor already attaches the bearer token automatically.
    const data = await api.get("/user/profile");
    return data.user;
  },
};