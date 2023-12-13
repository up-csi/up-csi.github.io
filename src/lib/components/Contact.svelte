<script>
    import BlackButton from "./BlackButton.svelte";
    import lino from "$lib/lino-hero.svg";
</script>

<section class="flex flex-col flex-wrap items-center sm:flex-row my-20">
    <div class="sm:w-64 w-48 m-4">
        <img alt="Cool Lino" src={lino} />
    </div>
    <div class="sm:text-left text-center sm:w-max w-3/5 px-5">
        <h1 class="font-dm text-csi-black sm:text-5xl text-3xl mb-6 font-light">Let's innovate together!</h1>
        <button><BlackButton /></button>
    </div>
</section>