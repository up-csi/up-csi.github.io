<script>
    import Button from './Button.svelte';
    import src from '$lib/lino-sablay.svg';
</script>

<div
    class="h-auto lg:h-136 flex flex-col lg:flex-row justify-between items-center rounded-3xl bg-gradient-to-b from-csi-blue/25 to-blue-white/25 dark:from-csi-blue/50 dark:to-blue-neutral/25"
>
    <div
        class="mb-12 mt-24 mx-5 lg:mr-0 lg:ml-20 xl:ml-40 gap-12 flex flex-col items-center lg:items-start text-center lg:text-left"
    >
        <div class="gap-3 flex flex-col text-csi-black dark:text-csi-white">
            <h1 class="font-dm text-5xl sm:text-6xl font-bold sm:w-104 leading-tight">
                Learn. Create. Innovate.
            </h1>
            <p class="text-sm">
                With UP Center for Student Innovations.
            </p>
        </div>
        <Button>Get in Touch</Button>
    </div>
    <div class="h-full lg:mr-6 flex flex-col items-center justify-end">
        <img {src} alt="Lino Sablay" class="w-156 relative top-4 sm:top-6" />
    </div>
</div>