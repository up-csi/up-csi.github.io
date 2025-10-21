<script lang="ts">
    import type { Event } from '$lib/models/event';

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();
    const { name, slug, current_session }: Event = $derived(event);
    const { type, start, end } = $derived(current_session);

    const date_options = { month: 'long', day: '2-digit', year: 'numeric' } as const;
    const time_options = { hour: 'numeric', minute: '2-digit' } as const;
</script>

<div
    class="bg-float text-float-foreground flex h-auto w-full flex-col overflow-hidden rounded-lg shadow-lg md:h-[32rem] md:w-72"
>
    {#if slug}
        <div class="**:!m-0">
            <!-- <enhanced:img
                {src}
                alt={name}
                loading="lazy"
                class="h-64 shrink-0 object-cover md:h-48"
            /> -->
            <img 
                src="http://143.198.208.36/website/assets/images/events/{slug}/0.webp"
                alt={name} 
                loading="lazy"
                class="h-64 shrink-0 object-cover md:h-48"
            >
        </div>
    {/if}
    <div class="!m-3 flex h-full grow flex-col gap-2 overflow-hidden p-1 *:!m-0">
        <p>{type}</p>
        <h2>{name}</h2>
        <p>
            {#if start.toLocaleDateString() === end.toLocaleDateString()}
                <time>{start.toLocaleDateString('en-US', date_options)}</time>,
                <time>{start.toLocaleTimeString('en-US', time_options)}</time>
                - <time>{end.toLocaleTimeString('en-US', time_options)}</time>
            {:else}
                <time>{start.toLocaleDateString('en-US', date_options)}</time> -
                <time>{end.toLocaleDateString('en-US', date_options)}</time>
            {/if}
        </p>
    </div>
</div>
