<script lang="ts">
    import type { Project } from '$lib/models/project';

    interface Props {
        project: Project;
    }

    const { project }: Props = $props();
    const { tag, name, client, end_date, description }: Project = $derived(project);

    function formatDate(date: Date): string {
        return date.toLocaleDateString('en-us', { year: 'numeric', month: 'long' });
    }

    const formattedDate = $derived(end_date ? formatDate(new Date(end_date)) : '');
</script>

<div
    class="bg-float text-float-foreground flex h-72 w-96 flex-col overflow-hidden rounded-4xl p-4 shadow-lg md:max-w-72 md:p-3"
>
    <div
        class="md:text-md !m-3 flex h-full flex-col items-start justify-start gap-2 overflow-hidden *:!m-0"
    >
        <span class="bg-csi-blue-500 text-csi-black w-25 rounded-xl py-1">{tag}</span>
        <h2 class="text-left">{name}</h2>
        <p class="text-left text-lg">{[client, formattedDate].filter(v => v).join(' // ')}</p>
        <p class="line-clamp-3 overflow-hidden text-left">{description}</p>
    </div>
</div>
