<script lang="ts">
    export interface FaqEntry {
        title: string;
        paragraph: string;
    }
    
    interface Props {
        faqEntries: FaqEntry[]
    }
    const { faqEntries }: Props = $props();
</script>

<div
    class="container mx-auto flex flex-col items-center gap-8 px-20 md:flex-row md:justify-between"
>
    {#each faqEntries as faqEntry}
        <div class="max-w-md text-center md:w-1/2">
            <h2 class="prose mb-2 text-xl font-bold dark:prose-invert md:text-lg">{faqEntry.title}</h2>
            <p class="prose text-justify text-sm leading-relaxed dark:prose-invert md:text-base">
                {faqEntry.paragraph}
            </p>
        </div>
    {/each}
</div>
