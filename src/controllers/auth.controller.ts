    export const getRefresh = (request, response) => {
    response.send("auth/refresh Get huselt irlee");
    }

    export const getSignIn = (request, response) => {
        response.send("auth/signin Post huselt irlee");
    }

    export const getSignUp = (request, response) => {
        response.send("auth/signup Post huselt irlee");
    }
    export const getResetPasswordRequest = (request, response) => {
    response.send("auth/reset-password-request Post huselt irlee");
    }

    export const getVerifyPassword = (request, response) => {
        response.send("auth/verify-password Get huselt irlee");
    }

    export const getResetPassword = (request, response) => {
        response.send("auth/reset-password Post huselt irlee");
    }

