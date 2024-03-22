<script>
    import src from "$lib/lino-sablay.svg";
    import upcsi from "$lib/icons/upcsi.svg";
    /* TODO: implement the anchors for the buttons so that the page scrolls/jumps to those points when the buttons are clicked */
</script>

<div class="bg-white p-3 flex flex-col w-full md:flex-row items-center md:items-start gap-5">
    <!--PLACEHOLDER IMAGES-->
    <div class="w-full md:w-1/2">
        <img src={src} alt="UP CSI Logo Placeholder" class="md:h-[500px] bg-warm-white rounded-3xl"/>
    </div>
    <div class="flex flex-col md:w-1/2 font-dm gap-5">
        <div class="flex flex-col items-center md:items-start md:pb-6">
            <img src={upcsi} alt="Circle placeholder" class="h-20 w-20 p-2 rounded-full bg-black"/>
        </div>
        <h1 class="text-sm">
            Meet UP Center for Student Innovations
        </h1>
        <p class="text-3xl">
            To create a center where students can innovate with the latest technology.
        </p>
        <div class='text-center md:text-left'>
            <button
            class="rounded-full bg-black px-4 py-2 text-csi-white dark:bg-csi-blue dark:text-csi-white"
            >Mission and Vision</button>
            <button
            class="rounded-full bg-black px-4 py-2 text-csi-white dark:bg-csi-blue dark:text-csi-white"
            >See Team</button>
        </div>
    </div>
</div>