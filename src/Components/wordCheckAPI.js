// wordCheckAPI.js
import axios from 'axios';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const checkWord = async (word) => {
  try {
    const response = await axios.get(`${API_URL}${word}`);
    if (response.data && response.data.length > 0) {
      return { exists: true, data: response.data };
    }
    return { exists: false, data: null };
  } catch (error) {
    return { exists: false, data: null };
  }
};
