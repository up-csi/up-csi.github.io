<script lang="ts">
    import type { Project } from '$lib/models/project';

    import Card from '$lib/components/cards/ProjectCard.svelte';

    interface Props {
        project: Project;
    }

    const { project }: Props = $props();

    let modalOpen = $state(false);
</script>

<button
    onclick={() => {
        modalOpen = true;
    }}
>
    <Card {project} />
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
