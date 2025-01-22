<script lang="ts">
    interface Props {
        faq_title: string;
        paragraph: string;
        faq_title1: string;
        paragraph1: string;
    }
    const { faq_title, paragraph, faq_title1, paragraph1 }: Props = $props();
</script>

<div
    class="container mx-auto flex flex-col items-center gap-8 px-20 md:flex-row md:justify-between"
>
    <div class="max-w-md text-center md:w-1/2 dark:hidden">
        <h2 class="font-lato mb-2 text-xl font-bold md:text-lg">{faq_title}</h2>
        <p class="font-lato text-gray-700 text-justify text-sm leading-relaxed md:text-base">
            {paragraph}
        </p>
    </div>
    <div class="max-w-md text-center md:w-1/2">
        <h2 class="prose mb-2 text-xl font-bold dark:prose-invert md:text-lg">{faq_title1}</h2>
        <p class="prose text-justify text-sm leading-relaxed dark:prose-invert md:text-base">
            {paragraph1}
        </p>
    </div>
</div>
