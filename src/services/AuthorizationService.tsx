


async function setToken(newToken: string) {
    const token = `${newToken}`
    window.localStorage.setItem('token', token)
}

async function removeToken() {
    window.localStorage.removeItem('token')
}

export default { setToken, removeToken }