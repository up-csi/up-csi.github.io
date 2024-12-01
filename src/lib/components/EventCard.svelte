<script lang="ts">
    import type { Event } from '$lib/events/events';
    const { src, event, state, type, dates, description, href }: Event = $props();
</script>

<div
    class="flex h-auto w-full flex-col overflow-hidden rounded-2xl bg-csi-neutral-50 shadow-lg md:h-[32rem] md:w-72 dark:bg-csi-neutral-900"
>
    <img {src} alt={event} loading="lazy" class="m-0 h-64 shrink-0 object-cover md:h-48" />
    <div class="m-3 flex h-full flex-col justify-between gap-2 overflow-hidden">
        <p class="m-0">{state} - {type}</p>
        <h2 class="m-0 duration-300">{event}</h2>
        <!-- TODO: Use <time> element here for best accessibility. -->
        <p class="m-0">{dates}</p>
        <p class="m-0 grow overflow-hidden">{description}</p>
        <p class="m-0">
            <a
                {href}
                class="no-underline transition-colors duration-300 ease-in-out hover:underline"
                >More Info</a
            >
        </p>
    </div>
</div>
