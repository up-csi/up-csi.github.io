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
    class="bg-float text-float-foreground flex h-full w-full flex-col overflow-hidden rounded-lg px-1 shadow-lg md:max-w-72 md:px-2"
>
    <div class="md:text-md !m-3 flex h-full flex-col justify-between gap-2 overflow-hidden *:!m-0">
        <div>
            {tag}
        </div>
        <h2>{name}</h2>
        <h4>{[client, formattedDate].filter(v => v).join(' // ')}</h4>
        <p class="line-clamp-3 grow overflow-hidden text-justify">{description}</p>
    </div>
</div>
