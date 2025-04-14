type RoleEnum = "EMPLOYEE" | "ADMIN" | "COMPANY"

type SystemModules = "kitchen" | "product" | "order"

interface Module {
    id: string
    name: SystemModules
    description: string
    createdAt: string
    updatedAt: string
}

interface PaginatedResponse<T> {
    data: T[]
    pagination: {
        page: number
        pageSize: number
        totalItems: number
        totalPages: number
    }
}
