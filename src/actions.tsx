export const setAccessToken = (access_token: string) => ({
    type: 'SET_ACCESS_TOKEN',
    payload: access_token
})

export const setRefreshToken = (refresh_token: string) => ({
    type: 'SET_REFRESH_TOKEN',
    payload: refresh_token
})