<script>
    import Button from '$lib/components/Button.svelte';
    import src from '$lib/lino-sablay.svg';
</script>

<div class="flex flex-col items-center justify-center gap-12 font-dm md:flex-row">
    <div class="flex w-full items-center justify-center rounded-3xl md:w-2/5">
        <img class="w-4/5 md:w-full" {src} alt="Placeholder" />
    </div>
    <div class="flex w-full flex-col gap-6 px-2 text-csi-black md:w-1/2 dark:text-csi-white">
        <h1>Who we are</h1>
        <p class="text-xl md:text-2xl">
            We are a service-oriented organization aimed towards the enhancement of student learning
            from the University of the Philippines Diliman, Department of Computer Science by
            working with real-world projects.
        </p>
        <div class="w-full text-center md:text-left">
            <Button>
                <a href="/about/">See About</a>
            </Button>
        </div>
    </div>
</div>
