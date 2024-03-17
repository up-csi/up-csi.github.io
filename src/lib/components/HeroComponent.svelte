<script>
    import src from '$lib/lino-sablay.svg';
</script>

<!--The current bg color is a placeholder, this should be a gradient-->
<div
    class="flex flex-col justify-center rounded-3xl bg-blue-white pt-36 md:flex-row dark:bg-csi-blue"
>
    <div
        class="flex flex-col items-center pb-8 text-center md:w-5/12 md:items-start md:pl-20 md:text-left"
    >
        <h1 class="md:text-6x1 pb-2 font-dm text-5xl font-bold text-black dark:text-csi-white">
            Learn. Create.
        </h1>
        <h1 class="md:text-6x1 pb-2 font-dm text-5xl font-bold text-black dark:text-csi-white">
            Innovate.
        </h1>
        <p class="pb-8 text-sm text-black dark:text-csi-white">
            With UP Center for Student Innovations.
        </p>
        <button
            class="rounded-full bg-black px-4 py-2 text-csi-white dark:bg-csi-blue dark:text-csi-white"
            >Get in Touch</button
        >
    </div>
    <div class="flex flex-col items-center md:flex-row">
        <img {src} alt="Lino Sablay" class="w-[550px]" />
    </div>
</div>
