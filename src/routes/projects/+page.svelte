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
        <FaqEntry title="GENERAL FAQ">
            <span
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span
            >
        </FaqEntry>
        <FaqEntry title="GENERAL FAQ">
            <span
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span
            >
        </FaqEntry>
    </Faq>
</section>