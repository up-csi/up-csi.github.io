<script>
    import { page } from '$app/stores';
    import Err404 from '$lib/components/error/Err404.svelte'
</script>

{#if $page.error}
    {#if $page.status === 404}
        <Err404 />
    {:else}
        <h1>{$page.status}</h1>
        <h1>{$page.error.message}</h1>
    {/if}
{:else}
    <h1>{$page.status}</h1>
    <h1>Woops! An error occurred.</h1>
{/if}