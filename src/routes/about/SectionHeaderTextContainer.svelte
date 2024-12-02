<script>
    import LinkButton from '$lib/components/LinkButton.svelte';
    import src from '$lib/lino-sablay.svg';
    import upcsi from '$lib/icons/upcsi.svg';
</script>

<section
    class="flex flex-col items-center gap-5 bg-csi-white p-3 text-csi-black md:flex-row md:items-start dark:bg-csi-black dark:text-csi-white"
>
    <!--PLACEHOLDER IMAGES-->
    <div class="w-full md:w-7/12">
        <img {src} alt="UP CSI Logo Placeholder" class="rounded-3xl bg-warm-white md:h-[500px]" />
    </div>
    <div class="flex flex-col gap-5 font-dm md:w-5/12">
        <div class="flex flex-col items-center md:items-start md:pb-6">
            <img
                src={upcsi}
                alt="Circle placeholder"
                class="h-20 w-20 rounded-full bg-black p-2 dark:bg-csi-white"
            />
        </div>
        <h1 class="text-sm">Meet UP Center for Student Innovations</h1>
        <p class="text-3xl">
            To create a center where students can innovate with the latest technology.
        </p>
        <div class="text-center text-csi-white md:text-left dark:text-csi-black">
            <LinkButton href="#mission-vision">Mission and Vision</LinkButton>
            <LinkButton href="/people">See Team</LinkButton>
        </div>
    </div>
</section>
