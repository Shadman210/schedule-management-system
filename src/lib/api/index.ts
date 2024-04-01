import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
    const session = { token: "" }; // fetch token here!
    config.headers["Authorization"] = `Bearer ${session?.token}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const errorResponse = error.response;
        if (errorResponse && errorResponse.data) {
            if (errorResponse.data.message) {
                if (Array.isArray(errorResponse.data.message)) {
                    const message = errorResponse.data.message.join("\r\n");
                    return Promise.reject(new Error(message));
                } else {
                    return Promise.reject(
                        new Error(errorResponse.data.message)
                    );
                }
            } else {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(error);
        }
    }
);
