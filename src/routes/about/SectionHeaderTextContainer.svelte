<script>
    import src from '$lib/lino-sablay.svg';
    import upcsi from '$lib/icons/upcsi.svg';
    /* TODO: implement the anchors for the buttons so that the page scrolls/jumps to those points when the buttons are clicked */
</script>

<section class="flex rounded-3xl w-full flex-col items-center gap-5 bg-white p-3 md:flex-row md:items-start dark:text-white dark:bg-csi-black">
    <!--PLACEHOLDER IMAGES-->
    <div class="w-full md:w-7/12">
        <img {src} alt="UP CSI Logo Placeholder" class="rounded-3xl bg-warm-white md:h-[500px]" />
    </div>
    <div class="flex flex-col gap-5 font-dm md:w-5/12">
        <div class="flex flex-col items-center md:items-start md:pb-6">
            <img src={upcsi} alt="Circle placeholder" class="h-20 w-20 rounded-full bg-black p-2 dark:bg-csi-white" />
        </div>
        <h1 class="text-sm">Meet UP Center for Student Innovations</h1>
        <p class="text-3xl">
            To create a center where students can innovate with the latest technology.
        </p>
        <div class="text-center md:text-left">
            <button
                class="rounded-full bg-black px-4 py-2 text-csi-white dark:bg-csi-blue dark:text-csi-black"
                >Mission and Vision</button
            >
            <button
                class="rounded-full bg-black px-4 py-2 text-csi-white dark:bg-csi-blue dark:text-csi-black"
                >See Team</button
            >
        </div>
    </div>
</section>
