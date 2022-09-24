import { api, returnUsername } from "./config";

export const getItems = async () => {
  try {
    const username = await returnUsername();

    const result = await api.get("list-items", {
      headers: {
        username,
      },
    });
    return result.data;
  } catch (error) {
    return { error };
  }
};
