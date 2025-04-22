<script>
    import LinkButton from '$lib/components/buttons/LinkButton.svelte';
    import src from '$lib/assets/lino/lino-sablay.svg';
</script>

<div
    class="font-dm flex flex-col items-center justify-center gap-12 transition-colors ease-in-out md:flex-row"
>
    <div class="flex w-full items-center justify-center rounded-3xl md:w-2/5">
        <img class="w-4/5 md:w-full" {src} alt="Placeholder" />
    </div>
    <div class="text-foreground flex w-full flex-col gap-6 px-2 md:w-1/2">
        <h1 class="transition-colors ease-in-out">Who we are</h1>
        <p class="text-xl transition-colors ease-in-out md:text-2xl">
            We are a service-oriented organization aimed towards the enhancement of student learning
            from the University of the Philippines Diliman, Department of Computer Science by
            working with real-world projects.
        </p>
        <div class="w-full text-center md:text-left">
            <LinkButton href="/about">See About</LinkButton>
        </div>
    </div>
</div>
