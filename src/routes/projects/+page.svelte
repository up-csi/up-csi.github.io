<script>
    import Faq from '$lib/components/Faq.svelte';
    import FaqEntry from '$lib/components/FaqEntry.svelte';
    import FilterPagePanel from '$lib/components/FilterPagePanel.svelte';
    import GeneralInfo from './GeneralInfo.svelte';
    import SocialMediaPanel from '$lib/components/SocialMediaPanel.svelte';
    import projects from '$lib/projects/projects';

    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose flex max-w-full flex-col gap-4 dark:prose-invert lg:flex-row">
    <div class="grow">
        <FilterPagePanel {filters} cardsInfo={projects} />
    </div>
    <div class="flex flex-col gap-4">
        <GeneralInfo />
        <SocialMediaPanel />
    </div>
</article>

<section>
    <Faq>
        <FaqEntry title="What kind of projects can I commission?">
            <span>UP CSI is open to accepting web development projects as of the moment. </span>
        </FaqEntry>
        <FaqEntry title="How much do projects usually cost?">
            <span
                >Costs vary depending on the scale of the project and the customer’s budget. Prices
                are usually negotiable as projects made with UP CSI is also a way for its members to
                practice the skills they have learned.</span
            >
        </FaqEntry>
        <FaqEntry title="How do I commission a project?">
            <span
                >You may contact UP CSI by sending an email <a href="mailto:lino@up-csi.org"
                    >here.</a
                >

                Preferably, please include the following information in your email:
            </span>
            <ul>
                <li>Brief project overview</li>
                <li>Brief features list</li>
                <li>Other project-specific concerns</li>
            </ul>
            <span> UP CSI will get back to you to set an appointment within 5 business days. </span>
        </FaqEntry>
        <FaqEntry title="Who will work on my project?">
            <span
                >The Director of Engineering and the Vice President for Service decide who will work
                on the projects. Priority is given to members who haven’t participated in a service
                project yet. However, these members must have completed the Dev Training Program and
                DevCamp — unless they already have sufficient development experience. UP CSI
                members, who are mostly passionate students from the UP Diliman Department of
                Computer Science, make up the pool of candidates for these projects.</span
            >
        </FaqEntry>
    </Faq>
</section>
