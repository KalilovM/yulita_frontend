import Cookies from "js-cookie";

export const useLogout = () => {
    const logout = () => {
        Cookies.remove("currentUser");
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
    }
    return {logout}
}