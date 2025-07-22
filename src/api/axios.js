import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.scryfall.com/cards/',
  headers: {
    'User-Agent': 'MagicPlayerApp/1.0',
    'Accept': 'application/json;q=0.9,*/*;q=0.8',
  }
});
