<script lang="ts">
    export let type: HTMLButtonElement['type'] = 'button';
</script>

<button
    {type}
    class="bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4"
>
    <slot />
</button>
