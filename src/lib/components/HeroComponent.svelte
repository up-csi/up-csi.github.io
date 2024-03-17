<script>
    import src from '$lib/lino-sablay.svg';
</script>

<!--The current bg color is a placeholder, this should be a gradient-->
<div class="bg-blue-white rounded-3xl flex flex-col justify-center pt-24 md:flex-row dark:bg-csi-blue">
    <div class="pb-8 flex flex-col items-center text-center md:w-5/12 md:pl-20 md:items-start md:text-left">
        <h1 class="md:text-6x1 pb-2 font-dm text-5xl font-bold text-black dark:text-csi-white">
            Learn. Create.
        </h1>
        <h1 class="md:text-6x1 pb-2 font-dm text-5xl font-bold text-black dark:text-csi-white">
            Innovate.
        </h1>
        <p class="pb-8 text-sm text-black dark:text-csi-white">With UP Center for Student Innovations.</p>
        <button class="rounded-full bg-black px-4 py-2 text-csi-white dark:bg-csi-blue dark:text-csi-white">Get in Touch</button>
    </div>
    <div class="flex flex-col items-center md:flex-row">
        <img {src} alt="Lino Sablay" class="w-[550px]"/>
    </div>
</div>
