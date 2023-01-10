export type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export type Todos = {
    todos: Todo[];
}

export async function load() {
    let url = 'https://dummyjson.com/todos'; 
    let data = await fetch(url);
    let todos: Todos = await data.json();

    return {
        todos: todos.todos
    }
}


