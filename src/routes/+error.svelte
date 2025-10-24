<script>
    import ThonkLino from '$lib/assets/lino/lino-thonk.png';
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    const { error, status } = $derived(page);
</script>

<section class="text-csi-black dark:text-csi-white space-y-12 py-12 text-center">
    {#if error === null}
        <p>{status}</p>
        <p>Woops! An error occurred.</p>
    {:else if status === 404}
        <img src={ThonkLino} alt="Thinking Lino Doodle" class="mx-auto block" />
        <p>
            Woops! Looks like this page isn't available. Go back <a
                href={resolve('/')}
                class="underline">home</a
            >?
        </p>
    {:else}
        <p>{status}</p>
        <p>{error.message}</p>
    {/if}
</section>
