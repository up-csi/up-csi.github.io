<script>
    // import LinkButton from '$lib/components/buttons/LinkButton.svelte';
    import src from '$lib/assets/lino/lino-sablay.svg';
</script>


<div class="flex flex-row rounded-md bg-csi-grayscale-200 p-5 gap-10 shadow-md shadow-csi-blue">
    <div class="flex flex-row items-center w-1/2 rounded-3xl hidden sm:flex">
        <img {src} alt={"Placeholder"}/>
    </div>

    <div class="flex flex-col gap-3">
        <h1 class="text-3xl font-semibold">Want to commission a project?</h1>

        <!-- this div is an empty div for a color block -->
        <div class="bg-csi-blue-600 w-full h-1"></div>

        <p>
            You may contact UP CSI by sending an email at lino@up-csi.org. Preferably, please include the following information in your email:
        </p>
        <ul class="ml-8 list-disc">
            <li>Brief project overview</li>
            <li>Brief features list</li>
            <li>Other project-specific concerns</li>
        </ul>
        <p>
            UP CSI will get back to you to set an appointment within 5 business days.
        </p>

        <div class="flex flex-row items-center w-full rounded-3xl sm:hidden">
            <img {src} alt={"Placeholder"}/>
        </div>
    </div>
</div>

<!-- <div
    class="from-csi-blue/50 to-muted/25 flex h-auto flex-col items-center justify-between rounded-3xl bg-linear-to-b transition-colors ease-in-out lg:h-[34rem] lg:flex-row"
>
    <div
        class="mx-5 mt-24 mb-12 flex flex-col items-center gap-12 text-center lg:mr-0 lg:ml-20 lg:items-start lg:text-left xl:ml-40"
    >
        <div class="text-foreground flex flex-col gap-3 transition-colors ease-in-out">
            <h1 class="font-dm text-5xl leading-tight font-bold sm:w-[26rem] sm:text-6xl">
                Learn. Create. Innovate.
            </h1>
            <p class="text-sm">With UP Center for Student Innovations.</p>
        </div>
    </div>
    <div class="flex h-full flex-col items-center justify-end lg:mr-6">
        <img {src} alt="Lino Sablay" class="relative top-4 w-[39rem] sm:top-6" />
    </div>
</div> -->
