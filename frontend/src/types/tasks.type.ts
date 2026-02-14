export interface TaskDTO {
    title: string,
    description: string,
    category: string,
    status: string,
    priority: string,
    date: string
}

export interface Task {
    title: string,
    description: string,
    category: string,
    status: string,
    priority: string,
    date: Date
}