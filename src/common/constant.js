import axios from "axios";
import { toast } from "react-toastify";
export const maxFiles = 5;
export const axiosInstance = axios.create({ baseURL: "http://localhost:5000" });
const toastConfig = {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT
};
export const toastSuccess = (msg) => toast.success(msg, toastConfig);
export const toastError = (msg) => toast.error(msg, toastConfig);