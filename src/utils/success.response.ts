export const Response = (status, data, token) => {
    return {
        data,
        status,
        auth: token
    }
}