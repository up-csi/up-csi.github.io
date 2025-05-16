<script lang="ts">
    import type { Project } from '$lib/models/project';

    import Card from '$lib/components/cards/ProjectCard.svelte';
    import ProjectModal from '$lib/components/modals/ProjectModal.svelte';

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
    class="cursor-pointer"
>
    <Card {project} />
</button>

<div class="absolute top-0 left-0">
    <div
        class="bg-csi-black/50 fixed z-100 flex h-screen w-screen items-center justify-center {modalOpen
            ? 'block'
            : 'hidden'}"
    >
        <ProjectModal bind:showModal={modalOpen} currentItem={project} />
    </div>
</div>
