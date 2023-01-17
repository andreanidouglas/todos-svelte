import type { PageServerLoad } from './$types';
import type { Todos }  from '$lib/types/Todo';

export const load = (async ({ params, url }) => {
    let todos_url = 'https://dummyjson.com/todos';
    let data = await fetch(todos_url);
    let todos: Todos = await data.json();

    let filter = url.searchParams.get('filter');


    return {
        todos: todos.todos, 
        filter: filter,
    }
}) satisfies PageServerLoad;
