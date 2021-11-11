// (C) 2021 GoodData Corporation

export const requestPasswordChange = (email: string) =>
    fetch("/gdc/account/lostpassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            lostPasswordRequest: {
                login: email,
                captcha: "",
                verifyCaptcha: "",
            },
        }),
    });

export const changePassword = (token: string, password: string, passwordVerify: string) =>
    fetch(`/gdc/account/lostpassword/${token}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            postSetNewPassword: {
                password: password,
                verifyPassword: passwordVerify,
            },
        }),
    });

export const registerUser = (payload) =>
    fetch("/gdc/account/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

export const getInvitation = (token: string) =>
    fetch(`/gdc/account/invitations/${token}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    }).then((response) => response.json());
