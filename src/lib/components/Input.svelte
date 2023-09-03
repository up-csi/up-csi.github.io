<script lang="ts">
    import type { HTMLInputTypeAttribute } from 'svelte/elements';

    export let type: HTMLInputTypeAttribute = 'text';
    export let required: HTMLInputElement['required'] = true;
    export let placeholder: HTMLInputElement['placeholder'] = '';

    // eslint-disable-next-line init-declarations
    export let name: HTMLInputElement['name'];
</script>

<input
    {type}
    {name}
    {required}
    {placeholder}
    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
/>
