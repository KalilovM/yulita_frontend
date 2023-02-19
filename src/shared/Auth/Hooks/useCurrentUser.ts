import React from "react";
import {UserTokens} from "@/shared/Auth/Types/UserTokens";
import Cookies from "js-cookie";
import {ApiService} from "@/processes/Auth/ApiService/ApiService";

const apiService = new ApiService()
export const useCurrentUser = () => {
    const [user, setUser] = React.useState<UserTokens | null>(null)

    React.useEffect(() => {
        const currentUser = Cookies.get("currentUser")
        if (currentUser) {
            setUser(JSON.parse(currentUser))
        }
    },[])

    const refetchUser = async () => {
        const userInfo = await apiService.getMe();
        const currentUser = Cookies.get("currentUser")

        if (userInfo && currentUser){
            const newUser = {
                ...JSON.parse(currentUser),
                first_name:userInfo.first_name,
                last_name:userInfo.last_name,
                email: userInfo.email
            }
            Cookies.set(JSON.stringify(newUser), "newUser")
            setUser(newUser)
        }
    }

    return {user, refetchUser}
}