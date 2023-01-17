<script>
  import "../app.postcss";
</script>


<div class="container mx-auto">
    <div class="flex flex-row flew-wrap py-4">
        <aside class="w-full sm:w-1/3 md:w-1/6 px-2 bg-secondary">
            <div class="sticky top-0 p-4 w-full">
                <ul class="flex flex-col overflow-hidden">
                    <li><a href="/" class="link link-primary">Home</a></li>
                    <li><a href="/about" class="link link-neutral">About</a></li>
                </ul>
            </div>
        </aside>
        <main class="w-full sm:w-2/3 md:w-5/6 pt-1 px-2">
            <slot />
        </main>
    </div>
</div>
<footer class="mt-auto text-center">
Douglas Andreani - 2023
</footer>

