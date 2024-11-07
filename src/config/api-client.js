import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.BASEURL;
const email = process.env.EMAIL;
const token = process.env.TOKEN;

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Basic ${Buffer.from(`${email}:${token}`).toString(
      'base64'
    )}`,
    Accept: 'application/json',
  },
});

export default apiClient