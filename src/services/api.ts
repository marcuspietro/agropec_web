import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_AGROPEC
});

console.log("AGRO", import.meta.env.VITE_API_AGROPEC);

export const API_AGROPEC_STATIC = import.meta.env.VITE_API_AGROPEC+'/medias/';