interface LoginActionI {
    email: string,
    password: string
}
export async function Login(data: LoginActionI) {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_USER_URL}/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })

    if (resp.status === 401) {
        throw new Error('INVALID_CREDENTIALS')
    }

    if (!resp.ok) {
        throw new Error('LOGIN_FAILED')
    }

    const responseData = await resp.json()

    return responseData.token
}   