<script>
    import CartoonCard from '$lib/components/cards/CartoonCard.svelte';
    import Contact from '$lib/components/footers/Contact.svelte';
    import ContentContainer from '$lib/components/panels/ContentContainer.svelte';
    import HeroComponent from '$lib/components/headers/HeroComponent.svelte';
    import WhoWeAre from '$lib/components/miscellaneous/WhoWeAre.svelte';
    import devcamps from '$lib/assets/cartoons/devcamps.svg';
    import services from '$lib/assets/cartoons/cartoon-card-placeholder.svg';
    import tech from '$lib/assets/cartoons/tech.svg';
</script>

<section>
    <HeroComponent />
</section>
<WhoWeAre />
<section class="prose dark:prose-invert max-w-full">
    <h1 class="text-center font-normal transition-colors ease-in-out">Why UP CSI?</h1>
    <div class="space-y-4">
        <ContentContainer>
            {#snippet text()}
                <p class="text-csi-black dark:text-csi-white m-0">For organizations</p>
                <h3
                    class="font-dm text-csi-black dark:text-csi-white m-0 text-2xl font-normal sm:text-3xl"
                >
                    We offer services catered to your specific software needs.
                </h3>
                <p class="text-csi-black dark:text-csi-white m-0 leading-5 sm:leading-6">
                    Need a small site or a full-scale project? Contact us to see how we can help.
                </p>
            {/snippet}
            {#snippet cards()}
                <CartoonCard src={services}></CartoonCard>
            {/snippet}
        </ContentContainer>
        <ContentContainer>
            {#snippet text()}
                <p class="text-csi-black dark:text-csi-white m-0">For students</p>
                <h3
                    class="font-dm text-csi-black dark:text-csi-white m-0 text-2xl font-normal sm:text-3xl"
                >
                    We enhance and upskill student abilities.
                </h3>
                <p class="text-csi-black dark:text-csi-white m-0 leading-5 sm:leading-6">
                    From training programs to external workshops, we elevate students' development
                    skills.
                </p>
            {/snippet}
            {#snippet cards()}
                <CartoonCard src={devcamps}>Developer Training Program & DevCamp</CartoonCard>
                <CartoonCard src={tech}>Technology Workshops</CartoonCard>
            {/snippet}
        </ContentContainer>
    </div>
</section>
<section class="prose dark:prose-invert max-w-full">
    <Contact />
</section>
