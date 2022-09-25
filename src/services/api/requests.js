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

export const addItem = async (body) => {
  try {
    const username = await returnUsername();

    const result = await api.post("/list-item", body, {
      headers: {
        username,
      },
    });

    return result.data;
  } catch (error) {
    return { error };
  }
};

export const updateItem = async (id, body) => {
  try {
    const username = await returnUsername();

    const result = await api.put(`/list-item/${id}`, body, {
      headers: {
        username,
      },
    });

    return result.data;
  } catch (error) {
    return { error };
  }
};
