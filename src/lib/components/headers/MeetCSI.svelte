<script>
    import LinkButton from '$lib/components/buttons/LinkButton.svelte';
    import src from '$lib/assets/lino/lino-sablay.svg';
    import upcsi from '$lib/assets/icons/upcsi.svg';
</script>

<section
    class="prose flex flex-col items-center gap-5 p-3 transition-colors ease-in-out md:flex-row md:items-start"
>
    <!--PLACEHOLDER IMAGES-->
    <div class="w-full md:w-7/12">
        <img {src} alt="UP CSI Logo Placeholder" class="bg-muted rounded-3xl md:h-[500px] transition-colors ease-in-out" />
    </div>
    <div class="font-dm flex flex-col gap-5 md:w-5/12">
        <div class="flex flex-col items-center md:items-start md:pb-6">
            <img
                src={upcsi}
                alt="Circle placeholder"
                class="bg-csi-white h-20 w-20 rounded-full p-2"
            />
        </div>
        <h1 class="text-sm transition-colors ease-in-out">Meet UP Center for Student Innovations</h1>
        <p class="text-3xl transition-colors ease-in-out">
            To create a center where students can innovate with the latest technology.
        </p>
        <div class="text-center md:text-left transition-colors ease-in-out">
            <LinkButton href="#mission-vision">Mission and Vision</LinkButton>
            <LinkButton href="/people">See Team</LinkButton>
        </div>
    </div>
</section>
