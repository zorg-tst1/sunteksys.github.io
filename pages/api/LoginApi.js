const loginApiBaseUrl = process.env.NEXT_PUBLIC_LOGIN_API_BASE_URL;

export const callLoginUser = async (userName,password) => {
    console.log("Process",process.env);
    //loginApiBaseUrl = "http://localhost:8084"
    const loginUrl = loginApiBaseUrl+ "/login";
    return fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify({
                    "userName": userName,
                    "password":password
                }
            ),
            headers: {"Content-Type": "application/json"}
        })
            .then((response) => response.json());
}