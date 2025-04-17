<script lang="ts">
    import type { Event } from '$lib/data/events';
    const { src, event, state, type, dates, description, href }: Event = $props();
</script>

<div
    class="bg-float text-float-foreground flex h-auto w-full flex-col overflow-hidden rounded-lg shadow-lg md:h-[32rem] md:w-72"
>
    <img {src} alt={event} loading="lazy" class="!m-0 h-64 shrink-0 object-cover md:h-48" />
    <div class="!m-3 flex h-full flex-col justify-between gap-2 overflow-hidden *:!m-0">
        <p>{state} - {type}</p>
        <h2>{event}</h2>
        <!-- TODO: Use <time> element here for best accessibility. -->
        <p>{dates}</p>
        <p class="grow overflow-hidden">{description}</p>
        <p>
            <a
                {href}
                class="text-float-foreground no-underline transition-colors ease-in-out hover:underline"
                >More Info</a
            >
        </p>
    </div>
</div>
