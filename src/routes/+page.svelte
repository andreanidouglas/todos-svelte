<script lang="ts">
    import type { PageData } from './$types'

    import Todo from "$lib/components/todo.svelte";

    export let data: PageData;

</script>
<div class='container p-4 justify'>
{#each data.todos as todo}
    <div class="text-2 text-justify py-4">
        <Todo todo={todo}/>
    </div>
{/each}
</div>
