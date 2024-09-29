<script>
    import CartoonCard from '$lib/components/CartoonCard.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import ContentContainer from '$lib/components/ContentContainer.svelte';
    import HeroComponent from '$lib/components/HeroComponent.svelte';
    import WhoWeAre from './WhoWeAre.svelte';
    import devcamps from '$lib/cartoons/devcamps.svg';
    import services from '$lib/cartoon-card-placeholder.svg';
    import tech from '$lib/cartoons/tech.svg';
</script>

<section>
    <HeroComponent />
</section>
<WhoWeAre />
<section class="prose max-w-full dark:prose-invert">
    <h1 class="text-center font-normal">Why UP CSI?</h1>
    <div class="space-y-4">
        <ContentContainer>
            <svelte:fragment slot="text">
                <p class="m-0 text-csi-black dark:text-csi-white">For organizations</p>
                <h3
                    class="m-0 font-dm text-2xl font-normal text-csi-black sm:text-3xl dark:text-csi-white"
                >
                    We offer services catered to your specific software needs.
                </h3>
                <p class="m-0 leading-5 text-csi-black sm:leading-6 dark:text-csi-white">
                    Need a small site or a full-scale project? Contact us to see how we can help.
                </p>
            </svelte:fragment>
            <svelte:fragment slot="cards">
                <CartoonCard src={services}></CartoonCard>
            </svelte:fragment>
        </ContentContainer>
        <ContentContainer>
            <svelte:fragment slot="text">
                <p class="m-0 text-csi-black dark:text-csi-white">For students</p>
                <h3
                    class="m-0 font-dm text-2xl font-normal text-csi-black sm:text-3xl dark:text-csi-white"
                >
                    We enhance and upskill student abilities.
                </h3>
                <p class="m-0 leading-5 text-csi-black sm:leading-6 dark:text-csi-white">
                    From training programs to external workshops, we elevate students' development
                    skills.
                </p>
            </svelte:fragment>
            <svelte:fragment slot="cards">
                <CartoonCard src={devcamps}>Developer Training Program & DevCamp</CartoonCard>
                <CartoonCard src={tech}>Technology Workshops</CartoonCard>
            </svelte:fragment>
        </ContentContainer>
    </div>
</section>
<section class="prose max-w-full dark:prose-invert">
    <Contact />
</section>
