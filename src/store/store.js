import { create } from "zustand";
import { api } from "../config/axios";

export const useAppStore = create((set) => ({
  news: [],
  loader: false,
  fetchNews: async (query) => {
    set(() => ({
      loader: true,
    }));
    try {
      const response = await api.get(
        `${query}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      set(() => ({
        news: response.data.articles,
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    set(() => ({
      loader: false,
    }));
  },
  setNews: () => {},
}));
