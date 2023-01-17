<script lang="ts">
    import type { PageData } from './$types'

    import Todo from "$lib/components/todo.svelte";

    export let data: PageData;

    let todos = data.todos;

    $: todosref = "";

    function update_todos() {
        if (todosref) {
            if (todosref === 'completed')
                todos = data.todos.filter(todo => todo.completed);
            else if (todosref === 'inprogress')
                todos = data.todos.filter(todo => !todo.completed);
            else 
                todos = data.todos;
        } else {
            todos = data.todos;
        }
    }

    function handleClick(e: any) {
        if (e.target.id === "completed") {
            todosref = "completed"
        } else if (e.target.id === "inprogress") {
            todosref = "inprogress"
        } else {
            todosref = "";
        }

        update_todos();
    }

</script>


<div class='container p-4 justify'>
<button class="btn btn-primary" id="all" on:click={handleClick}>All</button>
<button class="btn btn-primary" id="inprogress" on:click={handleClick}>In Progress</button>
<button class="btn btn-primary" id="completed" on:click={handleClick}>Completed</button>

<div class="grid md:grid-cols-3 sm:grid-cols-1 px-4" >
{#each todos as todo}
    <div class="text-2 text-justify py-4">
        <Todo todo={todo}/>
    </div>
{/each}
</div>
</div>
