<script>
    import { page } from '$app/stores';
    import Err404 from '$lib/components/error/Err404.svelte'
</script>

{#if $page.error}
    {#if $page.status === 404}
        <Err404 />
    {:else}
        <p>{$page.status}</p>
        <p>{$page.error.message}</p>
    {/if}
{:else}
    <p>{$page.status}</p>
    <p>Woops! An error occurred.</p>
{/if}