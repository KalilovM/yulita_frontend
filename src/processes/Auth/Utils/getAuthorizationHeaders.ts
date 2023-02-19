import Cookies from "js-cookie";

export function getAuthorizationHeaders() {
    const accessToken = Cookies.get("accessToken")
    return {
        Authorization:`Bearer ${accessToken}`
    }
}