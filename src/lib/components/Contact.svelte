<script>
    import ButtonMailTo from '$lib/components/ButtonMailTo.svelte';
    import src from '$lib/lino-hero.svg';
</script>

<section class="transition-colors ease-in-out duration-300 flex flex-col items-center justify-center gap-3 px-8 py-12 md:flex-row">
    <div class="transition-colors ease-in-out duration-300 p-4 sm:flex-shrink-0">
        <img {src} alt="Cool Lino" class="transition-colors ease-in-out duration-300 m-0 w-52" />
    </div>
    <div class="transition-colors ease-in-out duration-300 flex w-fit flex-col items-center justify-center gap-8 md:items-start md:gap-6">
        <h1
            class="transition-colors ease-in-out duration-300 m-0 text-center font-dm text-3xl font-light text-csi-black sm:text-5xl md:text-left dark:text-csi-white"
        >
            Let's innovate together!
        </h1>
        <ButtonMailTo>Shoot us a message</ButtonMailTo>
    </div>
</section>
