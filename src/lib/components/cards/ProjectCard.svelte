<script lang="ts">
    import type { Project } from '$lib/models/project';

    interface Props {
        project: Project;
    }

    const { project }: Props = $props();
    const { name, description }: Project = $derived(project);
</script>

<div
    class="bg-float text-float-foreground flex h-full w-full flex-col overflow-hidden rounded-lg px-1 shadow-lg md:max-w-72 md:px-2"
>
    <div class="md:text-md !m-3 flex h-full flex-col justify-between gap-2 overflow-hidden *:!m-0">
        <h2>{name}</h2>
        <p class="grow overflow-hidden text-justify">{description}</p>
    </div>
</div>
