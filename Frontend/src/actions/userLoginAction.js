import axios from "axios";
export function loginUserAccount(user) {
    return {
        type: "LOGIN_USER_ACCOUNT",
        payload: axios.post(`http://localhost:3000/user/login`, user),
    };
}
