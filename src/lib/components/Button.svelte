<script lang="ts">
    export let type: HTMLButtonElement['type'] = 'button';
</script>

<button
    {type}
    class="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
    <slot />
</button>
