<script>
    import Contact from '$lib/components/Contact.svelte';
    import { contactSection } from '$lib/stores/contactStore';
    import MissionVision from './MissionVision.svelte';
    import SectionHeaderTextContainer from './SectionHeaderTextContainer.svelte';
    import TeamPanel from './TeamPanel.svelte';
</script>

<SectionHeaderTextContainer />
<MissionVision />
<TeamPanel />
<section bind:this={$contactSection} class="prose max-w-full dark:prose-invert">
    <Contact />
</section>
