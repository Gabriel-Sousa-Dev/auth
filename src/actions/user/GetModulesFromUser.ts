import { jwtDecode, type JwtPayload } from "jwt-decode";

export async function GetModulesFromUser(token: string) {
    // TODO: Criar tipagem para isso
    const tokenData = jwtDecode<JwtPayload & {id: string, role: RoleEnum, companyId: string}>(token) ?? ''
    
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_USER_URL}/employee/${tokenData.id}/modules`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })

    if (!resp.ok) {
        throw new Error('Erro ao buscar os modúlos do usuário')
    }

    const data = await resp.json() as PaginatedResponse<Module>
    return data
}