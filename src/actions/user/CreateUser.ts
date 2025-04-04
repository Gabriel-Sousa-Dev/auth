interface CreateUserI {
    email: string
    fullname: string
    password: string
    telephone: string
}
export async function CreateUser(data: CreateUserI) {
    // TODO: esse endpoint não existe, ele para exemplicação
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_USER_URL}/user`, {
        method: 'POST',
        headers: {
            'Accepted-Type': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.fullname,
            email: data.email,
            password: data.password,
            tellphone: data.telephone
        })
    })

    if (!resp.ok) {
        throw new Error('REQUEST_FAILED')
        return
    }

    return resp
}