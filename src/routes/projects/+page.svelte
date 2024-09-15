<script>
    import Contact from '$lib/components/Contact.svelte';
    import { contactSection } from '$lib/stores/contactStore';
    import EventsPanel from '$lib/components/EventsPanel.svelte';
    import projects from './projects';

    const filters = ['All', 'Service', 'Innovation', 'Other'];
</script>

<article class="prose max-w-full dark:prose-invert">
    <EventsPanel {filters} events={projects} />
</article>

<section bind:this={$contactSection} class="prose max-w-full dark:prose-invert">
    <Contact />
</section>
