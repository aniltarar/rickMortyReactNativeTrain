import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Karakterleri çağır
 * @param {number} page - Sayfa numarası
 * @param {string} name - Karakter adı (isteğe bağlı)
 */

export const fetchCharacters = async (page = 1, name = "") => {
  try {
    // response ile axios.get ile API'den karakterleri çağırıyoruz
    const response = await axios.get(`${BASE_URL}/character`, {
      params: {
        page,
        name,
      },
    });
    // response.data ile API'den gelen veriyi return olarak döndürüyoruz
    return response.data;
  } catch (error) {
    throw error;
  }
};
