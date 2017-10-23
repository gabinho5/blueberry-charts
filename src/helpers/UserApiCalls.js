import HttpServices from '../../helpers/HttpServices'

const EXPIRY_DELAY = 2000

export const userSuccess = (info, token) => {
    return {
        type: 'USER_SUCCESS',
        info: info,
        token: token,
        status: {
            error: null,
            loading: false,
            registering: false,
        }
    }
}

export const userError = (err) => {
    return {
        type: 'USER_ERROR',
        status: {
            error: err,
            loading: false,
        }
    }
}

export const userExpireError = () => {
    return {
        type: 'USER_ERROR_EXPIRED',
        status: {
            error: null,
            loading: false,
        }
    }
}

export const userTimeoutError = (err, time) => {
    return (dispatch) => {
        dispatch(userError(err))
        setTimeout(
            () => dispatch(userExpireError()),
            time
        )
    }
}

export const userLoading = () => {
    return {
        type: 'USER_LOADING',
        status: {
            error: null,
            loading: true,
        }
    }
}

export const userRegistering = () => {
    return {
        type: 'USER_REGISTERING',
        status: {
            error: null,
            loading: false,
            registering: true,
        }
    }
}

export const userResetPasswordPending = () => {
    return {
        type: 'USER_RESET_PENDING',
        status: {
            error: null,
            loading: false,
            resetting: true,
        }
    }
}

export const userResetPasswordSuccess = () => {
    return {
        type: 'USER_RESET_SUCCESS',
        status: {
            error: null,
            loading: false,
            resetting: false,
        }
    }
}

export const userFetchData = (token) => {
    return (dispatch) => {
        dispatch(userLoading())
        HttpServices.setToken(token)

        HttpServices.get("/api/user/me", (err, res) => {
            if (!err && res) {
                dispatch(userSuccess(res, token))
            }
            else {
                dispatch(userTimeoutError(err, EXPIRY_DELAY))
            }
        });
    }
}

export const userLogin = (email, password) => {
    return (dispatch) => {
        dispatch(userLoading())

        HttpServices.post('/api/user/login', {email: email, password: password}, (err, res) => {
            if (err) {
                dispatch(userTimeoutError(err, EXPIRY_DELAY))
            } else {
                HttpServices.setToken(res.token);
                dispatch(userSuccess(res.user, res.token));
            }
        })
    }
}

export const userRegister = (first_name, last_name, email, password) => {
    return (dispatch) => {
        HttpServices.post('/api/user/register', {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }, (err, res) => {
            if (err) {
                dispatch(userTimeoutError(err, EXPIRY_DELAY))
            } else {
                dispatch(userRegistering())
            }
        })
    }
}

export const userConfirm = (email, code) => {
    return (dispatch) => {
        HttpServices.post('/api/user/confirm', {email: email, code: code}, (err, res) => {
            if (err) {
                dispatch(userTimeoutError(err, EXPIRY_DELAY))
            } else {
                HttpServices.setToken(res.token)
                dispatch(userSuccess(res.user, res.token))
            }
        })
    }
}

export const userSendCode = (email) => {
    return (dispatch) => {
        HttpServices.post('/api/user/sendcode', {email: email}, (err, res) => {
            if (err) {
                dispatch(userTimeoutError(err, EXPIRY_DELAY))
            } else {
                dispatch(userResetPasswordPending())
            }
        })
    }
}

export const userResetPassword = (email, password, confirm) => {
    return (dispatch) => {
        if (password != confirm) {
            return dispatch(userTimeoutError("Passwords do not match", EXPIRY_DELAY))
        }
        dispatch(userLoading())

        HttpServices.post('/api/user/resetpassword', {email: email, password: password}, (err, res) => {
            if (err) {
                dispatch(userTimeoutError(err, EXPIRY_DELAY))
            } else {
                dispatch(userResetPasswordSuccess())
            }
        })
    }
}

export const userLogout = () => {
    HttpServices.clearToken();
    return {
        type: 'USER_LOGOUT',
        state: {
            info: null,
            token: null,
            error: null,
            loading: false,
            registering: false,
        }
    }
}
export const userFetchSuccess = (data) => {
    return {
        type: 'USER_FETCH_SUCCESS',
        fetched_info: data
    }
}
export const userFetchById = (id) => {
    return (dispatch) => {
        dispatch(userLoading())
        // HttpServices.get(adfsajfasdfals)
        // if err, error
        // return (dispatch(userFetchSuccess))
    }
}
