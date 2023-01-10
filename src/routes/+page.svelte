<script>
    import Todo from "../lib/components/todo.svelte"

    export let data
</script>
<div class='container p-4 justify'>
{#each data.todos as todo}
    <div class="text-2 text-justify">
        <Todo todo={todo}/>
    </div>
{/each}
</div>
