<script>
    import Err404 from '$lib/components/error/Err404.svelte';
    import { page } from '$app/stores';
</script>

{#if $page.error}
    {#if $page.status === 404}
        <Err404 />
    {:else}
        <p class="my-12 text-center text-csi-black dark:text-csi-white">{$page.status}</p>
        <p class="my-12 text-center text-csi-black dark:text-csi-white">{$page.error.message}</p>
    {/if}
{:else}
    <p class="my-12 text-center text-csi-black dark:text-csi-white">{$page.status}</p>
    <p class="my-12 text-center text-csi-black dark:text-csi-white">Woops! An error occurred.</p>
{/if}
