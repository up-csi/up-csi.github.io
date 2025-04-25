<script lang="ts">
    import type { Event } from '$lib/models/event';

    import Card from '$lib/components/cards/EventCard.svelte';

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();

    let modalOpen = $state(false);
</script>

<button
    onclick={() => {
        modalOpen = true;
    }}
>
    <Card {event} />
</button>

<div class="absolute top-0 left-0">
    <div
        class="bg-csi-black/50 fixed z-100 flex h-screen w-screen items-center justify-center {modalOpen
            ? 'block'
            : 'hidden'}"
    >
        <!-- TODO: insert modal here -->
    </div>
</div>
