import axios from "axios";
export function loginUserAccount(user) {
    return {
        type: "LOGIN_USER_ACCOUNT",
        payload: axios.post(`${BASE_URL}/api/user/login`, user),
    };
}
