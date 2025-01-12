import axios from "axios";
import { loadState } from "@/app/storage";
import { LOCAL_STORAGE_KEY } from "@/constants";

axios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (config) => {
    const token = loadState(LOCAL_STORAGE_KEY)?.user?.token; // token from LS!
    if (!token) return config;

    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: `Bearer ${token}`,
      },
    };
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    const statusCode = response.status;
    if (statusCode === 260) {
      const message = response.data?.message;
      if (typeof message === "string") {
        // Notification, if we need it!
        console.log(message);
      } else {
        console.log(`Ожидали message строкой, а получили ${typeof message}`);
      }
    }

    return response;
  },
  (err) => {
    // Any HTTP Code which is not 2xx will be considered as error
    const statusCode = err.response.status;
    if (statusCode === 403) {
      console.log(403);
    }

    throw err;
  },
);

export default axios;
