<script lang="ts">
    import type { Project } from '$lib/data/projects';
    const { src, project, description }: Project = $props();
</script>

<div
    class="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-csi-neutral-50 px-1 shadow-lg md:max-w-72 md:px-2 dark:bg-csi-neutral-900"
>
    {#if src}
        <img {src} alt={project} loading="lazy" class="m-0 h-64 shrink-0 object-cover md:h-48" />
    {/if}
    <div class="md:text-md m-3 flex h-full flex-col justify-between gap-2 overflow-hidden">
        <h2 class="m-0 duration-150">{project}</h2>
        <p class="m-0 grow overflow-hidden text-justify">{description}</p>
    </div>
</div>
