<script lang="ts">
    import type { HTMLTextareaAttributes } from 'svelte/elements';

    export let required: HTMLTextAreaElement['required'] = true;
    export let placeholder: HTMLTextAreaElement['placeholder'] = '';
    export let rows: HTMLTextareaAttributes['rows'] = null;
    export let cols: HTMLTextareaAttributes['cols'] = null;

    // eslint-disable-next-line init-declarations
    export let name: HTMLTextAreaElement['name'];
</script>

<textarea
    {name}
    {required}
    {placeholder}
    {rows}
    {cols}
    class="border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 block w-full rounded-lg border p-2 text-sm dark:text-white"
></textarea>
