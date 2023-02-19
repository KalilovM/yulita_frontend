import axios, {AxiosInstance, AxiosResponse} from "axios";
import {getAuthorizationHeaders} from "@/processes/Auth/Utils/getAuthorizationHeaders";
import {UserTokens} from "@/shared/Auth/Types/UserTokens";
import {Profile} from "@/shared/Auth/Types/Profile";
import Cookies from "js-cookie";


export class ApiService {
    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.BASE_URL,
            timeout: 7 * 24 * 60 * 60,
            timeoutErrorMessage: "Request timed out",
            headers: getAuthorizationHeaders()
        })
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const refreshToken = Cookies.get("refreshToken")
                    if (refreshToken) {
                        const accessToken = await this.refreshToken(refreshToken);
                        this.instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                        return this.instance(originalRequest);
                    }
                    else{
                        Cookies.remove("accessToken")
                        Cookies.remove("refreshToken")
                    }
                }
                return Promise.reject(error)
            })
    }

    async refreshToken(refreshToken:string): Promise<string> {
            const tokens = await this.instance.post("/token/refresh/", {refresh: refreshToken})
            Cookies.set("accessToken", tokens.data.access)
            return tokens.data.access
    }

    async login(email: string, password: string): Promise<UserTokens> {
        const tokens = await this.instance.post("/login/", {email, password})
        return tokens.data
    }

    async getMe(): Promise<Profile> {
        const profile = await this.instance.get("users/me/")
        return profile.data
    }
}