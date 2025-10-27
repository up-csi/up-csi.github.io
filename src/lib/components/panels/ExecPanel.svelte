<script lang="ts">
    import type { Board } from '$lib/types/board';

    import { getCommitteeInfo } from '$lib/types/committees';

    import Card from '$lib/components/cards/MemberCard.svelte';

    interface Props {
        board: Board;
    }

    const { board }: Props = $props();
    const { officers }: Board = $derived(board);
    const { color, foreground } = getCommitteeInfo('Executive');
</script>

<section
    class="grid w-full grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5"
>
    {#each officers as member (member.name)}
        <Card {member} {color} {foreground} />
    {/each}
</section>
