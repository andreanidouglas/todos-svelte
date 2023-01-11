import type { PageServerLoad } from './$types';
import type { Todos }  from '$lib/types/Todo';

export const load = (async () => {
    let url = 'https://dummyjson.com/todos';
    let data = await fetch(url);
    let todos: Todos = await data.json();

    return {
        todos: todos.todos
    }
}) satisfies PageServerLoad;