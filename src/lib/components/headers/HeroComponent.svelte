<script>
    import LinkButton from '$lib/components/buttons/LinkButton.svelte';
    import src from '$lib/assets/lino/lino-sablay.svg';
</script>

<div
    class="from-csi-blue/25 to-blue-white/25 dark:from-csi-blue/50 dark:to-blue-neutral/25 flex h-auto flex-col items-center justify-between rounded-3xl bg-linear-to-b transition-colors ease-in-out lg:h-[34rem] lg:flex-row"
>
    <div
        class="mx-5 mt-24 mb-12 flex flex-col items-center gap-12 text-center lg:mr-0 lg:ml-20 lg:items-start lg:text-left xl:ml-40"
    >
        <div
            class="text-csi-black dark:text-csi-white flex flex-col gap-3 transition-colors ease-in-out"
        >
            <h1 class="font-dm text-5xl leading-tight font-bold sm:w-[26rem] sm:text-6xl">
                Learn. Create. Innovate.
            </h1>
            <p class="text-sm">With UP Center for Student Innovations.</p>
        </div>
        <LinkButton href="mailto:lino@up-csi.org">Get in Touch</LinkButton>
    </div>
    <div class="flex h-full flex-col items-center justify-end lg:mr-6">
        <img {src} alt="Lino Sablay" class="relative top-4 w-[39rem] sm:top-6" />
    </div>
</div>
