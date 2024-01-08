<script>
    import BlueButton from '$lib/components/BlueButton.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import ContentContainer from '$lib/components/ContentContainer.svelte';
    import CartoonCard from '$lib/components/CartoonCard.svelte';
</script>

<section
    class="flex items-center bg-lino bg-contain bg-center bg-no-repeat bg-origin-content sm:h-[40vh] sm:bg-right lg:h-[60vh]"
>
    <div class="prose">
        <h1 class="font-dm">Learn. Create. Innovate.</h1>
        <p>
            We are a service-oriented organization aimed towards the enhancement of student learning
            from the University of the Philippines Diliman, Department of Computer Science by
            working with real-world projects.
        </p>
    </div>
</section>
<section class="prose max-w-full">
    <h2 class="font-dm">Our Mission</h2>
    <ul>
        <li>
            Create development camps wherein students can enrich their skills in Software
            Engineering.
        </li>
        <li>Have a diverse set of software projects to enhance the versatility of UP CSI.</li>
        <li>
            Showcase the quality projects produced by the Department of Computer Science (DCS) and
            UP CSI and make them accessible to the public.
        </li>
    </ul>
</section>
<section class="prose max-w-full">
    <h2 class="font-dm">Our Vision</h2>
    <ul>
        <li>
            Develop well-rounded DCS students with fundamental classroom learning through practical
            experience.
        </li>
        <li>
            Establish DCS as a center of student innovation and excellent in software engineering.
        </li>
        <li>
            Improve people's lives by producing works that advocate the right use of Computer
            Science and Software Engineering.
        </li>
    </ul>
</section>
<section class="prose max-w-full">
    <h2 class="font-dm">What We Do</h2>
    <p>
        Our mission is to provide opportunities for students to enhance their software engineering
        and their innovative thinking by:
    </p>
    <ul>
        <li>Enhancing and upskilling student abilities through our developer training program.</li>
        <li>Exploring avenues for industry partnerships.</li>
        <li>Fulfilling the needs of the community through technological innovation.</li>
        <li>Providing solutions to <em>your</em> problems.</li>
    </ul>
</section>
<section class="prose max-w-full">
    <h1 class="font-dm">Why UP CSI?</h1>
    <div class="space-y-4">
        <ContentContainer>
            <svelte:fragment slot="text">
                <h2 class="m-0 font-dm">For organizations</h2>
                <h3 class="m-0 font-dm font-normal text-black">
                    We offer services catered to your specific software needs.
                </h3>
                <p class="m-0">
                    Automate the busy work in your day-to-day operations so people can get home on
                    time more often.
                </p>
            </svelte:fragment>

            <svelte:fragment slot="cards">
                <CartoonCard>
                    <svelte:fragment slot="card_content">Development</svelte:fragment>
                </CartoonCard>

                <CartoonCard>
                    <svelte:fragment slot="card_content">Development</svelte:fragment>
                </CartoonCard>
            </svelte:fragment>
        </ContentContainer>

        <ContentContainer>
            <svelte:fragment slot="text">
                <h2 class="m-0 font-dm">For students</h2>
                <h3 class="m-0 font-dm font-normal text-black">
                    We enhance and upskill student abilities.
                </h3>
                <p class="m-0">
                    Automate the busy work in your day-to-day operations so people can get home on
                    time more often.
                </p>
            </svelte:fragment>
            <svelte:fragment slot="cards">
                <CartoonCard>
                    <svelte:fragment slot="card_content">Developer Training Program & Dev Camp</svelte:fragment>
                </CartoonCard>

                <CartoonCard>
                    <svelte:fragment slot="card_content">Technology Workshops</svelte:fragment>
                </CartoonCard>
            </svelte:fragment>
        </ContentContainer>
    </div>
</section>
<section class="prose max-w-full">
    <h3 class="text-center font-dm">We've worked with</h3>
    <Carousel />
</section>
<section class="prose max-w-full">
    <h1 class="font-dm">Connect with Us</h1>
    <BlueButton />
</section>
