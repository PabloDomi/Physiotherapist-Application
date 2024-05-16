export const BrandName = 'Fisioterapeuta Manager'

export const theresUser = 'User'
export const noUser = 'NoUser'

export const baseUrl = 'http://localhost:5300/api/'

export const authorizationHeader = {
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
}