import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    return { error };
  }
};

export const getData = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    return { error };
  }
};
