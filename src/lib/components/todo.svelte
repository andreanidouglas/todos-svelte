<script lang="ts">
    import type { Todo } from '$lib/types/Todo'
    export let todo: Todo
</script>

<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/tech" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">#{todo.id}</h2>
    <p>{todo.todo}</p>
    <div class="card-actions justify-between">
        <div class="card-actions">
            {#if todo.completed == true}
                <div class="badge badge-success">Completed</div>
            {:else}
                <div class="badge badge-warning">In Progress</div>
            {/if}
        </div>
      <button class="btn btn-primary">Open</button>
    </div>
  </div>
</div>