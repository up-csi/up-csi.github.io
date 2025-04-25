<script lang="ts">
    import type { Event } from '$lib/models/event';

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();
    const { type, imgs, name, start_date, end_date, description }: Event = $derived(event);
    const src = $derived.by(() => {
        return imgs ? imgs[0] : null;
    });
</script>

<div
    class="bg-float text-float-foreground flex h-auto w-full flex-col overflow-hidden rounded-lg shadow-lg md:h-[32rem] md:w-72"
>
    {#if src}
        <div class="**:!m-0">
            <enhanced:img
                {src}
                alt={name}
                loading="lazy"
                class="h-64 shrink-0 object-cover md:h-48"
            />
        </div>
    {/if}
    <div class="!m-3 flex h-full flex-col justify-between gap-2 overflow-hidden *:!m-0">
        <p>{type}</p>
        <h2>{name}</h2>
        <!-- TODO: Use <time> element here for best accessibility. -->
        <p>{start_date} - {end_date}</p>
        <p class="grow overflow-hidden">{description}</p>
    </div>
</div>
