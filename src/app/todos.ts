export interface Todo {
    readonly id: Number,
    title: string 
}

export const todos: Todo[] = [
    {
        id: 1,
        title: 'Walk the Dog'
    },
    {
        id: 2,
        title: 'Water the plants'
    },
    {
        id: 3,
        title: 'Wash the dishes'
    },
]