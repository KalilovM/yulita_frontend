import {ApiService} from "@/processes/Auth/ApiService/ApiService";
import Cookies from "js-cookie";
import {UserTokens} from "@/shared/Auth/Types/UserTokens";

export const useLogin =() => {
    const apiService = new ApiService()
    const login = async (email: string, password:string) => {
        const user = await apiService.login(email,password)
        if (user) {
            Cookies.set("accessToken", user.access)
            Cookies.set("refreshToken", user.refresh)
        }
        return user as UserTokens
    }

    return {login}
}