import {API_BASE, JSON_BASE} from '../config/env'
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

//DEMO JSON SERVER
const jsonApi = axios.create({
  baseURL: JSON_BASE,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  api,
  jsonApi
};