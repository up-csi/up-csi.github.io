<script>
    import BlackButton from './BlackButton.svelte';
    import lino from '$lib/lino-hero.svg';
</script>

<section class="my-20 flex flex-col flex-wrap items-center sm:flex-row">
    <div class="m-4 w-48 sm:w-64">
        <img alt="Cool Lino" src={lino} />
    </div>
    <div class="w-3/5 px-5 text-center sm:w-max sm:text-left">
        <h1 class="mb-6 font-dm text-3xl font-light text-csi-black sm:text-5xl">
            Let's innovate together!
        </h1>
        <button><BlackButton /></button>
    </div>
</section>
