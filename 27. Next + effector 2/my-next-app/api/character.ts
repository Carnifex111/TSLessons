import api from "./axiosClient";
import { createEffect } from "effector";

export const getCharacterFx = createEffect(async () => {
  try {
    const response = await api.get("character");
    return response.data.results;
  } catch (error) {
    throw error;
  }
});
