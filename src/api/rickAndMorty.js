import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";


export const fetchCharacters = async () => {
  try {
    // response ile axios.get ile API'den karakterleri çağırıyoruz
    const response = await axios.get(`${BASE_URL}/character`, {
      
    });

    // response.data ile API'den gelen veriyi return olarak döndürüyoruz
   
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchEpisodes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/episode`, {

    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
