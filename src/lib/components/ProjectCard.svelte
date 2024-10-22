<script lang="ts">
    import type { Project } from '$lib/projects/projects';
    const { src, project, type, description, href }: Project = $props();
</script>

<div
    class="flex h-auto w-full flex-col overflow-hidden rounded-2xl bg-csi-neutral-50 shadow-lg md:h-[32rem] md:w-72 dark:bg-csi-neutral-900"
>
    <img {src} alt={project} loading="lazy" class="m-0 h-64 shrink-0 object-cover md:h-48" />
    <div class="m-3 flex h-full flex-col justify-between gap-2 overflow-hidden">
        <p class="m-0">{type}</p>
        <h2 class="m-0">{project}</h2>
        <p class="m-0 grow overflow-hidden">{description}</p>
        <p class="m-0"><a {href}>More Info</a></p>
    </div>
</div>
