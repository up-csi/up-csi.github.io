<script lang="ts">
    interface Props{
        faq_title:string;
        paragraph:string;
        faq_title1:string;
        paragraph1:string;
    }
    const {faq_title, paragraph, faq_title1, paragraph1}:Props = $props();
</script>

<div class="container mx-auto px-20 flex flex-col md:flex-row md:justify-between items-center gap-8">
    <div class="text-center max-w-md md:w-1/2 dark:hidden">
        <h2 class="font-lato font-bold mb-2 text-xl md:text-lg">{faq_title}</h2>
        <p class="font-lato text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            {paragraph}
          </p>
    </div>
    <div class="text-center max-w-md md:w-1/2 dark:hidden">
        <h2 class="font-lato font-bold mb-2 text-xl md:text-lg">{faq_title1}</h2>
        <p class="font-lato text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            {paragraph}
          </p>
    </div>
</div>