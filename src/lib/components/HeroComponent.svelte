<script>
    import Button from './Button.svelte';
    import src from '$lib/lino-sablay.svg';
</script>

<div
    class="flex flex-col justify-center rounded-3xl bg-gradient-to-b from-csi-blue/25 to-blue-white/25 pt-36 md:flex-row dark:from-csi-blue/50 dark:to-blue-neutral/25"
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
        <Button>Get in Touch</Button>
    </div>
    <div class="flex flex-col items-center md:flex-row">
        <img {src} alt="Lino Sablay" class="w-[550px]" />
    </div>
</div>
