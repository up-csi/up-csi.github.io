<script>
    import BlackButton from '$lib/components/BlackButton.svelte';
    import src from '$lib/lino-hero.svg';
</script>

<section class="flex flex-col items-center justify-center gap-3 px-8 py-12 md:flex-row">
    <div class="w-48 p-4 sm:flex-shrink-0">
        <img {src} alt="Cool Lino" class="m-0" />
    </div>
    <div class="flex w-fit flex-col items-center justify-center gap-8 md:items-start md:gap-6">
        <h1
            class="m-0 text-center font-dm text-3xl font-light text-csi-black dark:text-csi-white sm:text-5xl md:text-left"
        >
            Let's innovate together!
        </h1>
        <BlackButton>Shoot us a message</BlackButton>
    </div>
</section>
