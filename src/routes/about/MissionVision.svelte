<script>
    import Card from './Card.svelte';
</script>

<div
    class="flex flex-col gap-16 rounded-3xl bg-warm-white px-8 py-12 font-dm md:px-12 dark:bg-csi-black dark:text-csi-white"
>
    <div class="flex flex-col gap-8">
        <div class="text-center text-2xl">Mission</div>
        <div class="align-center flex flex-col justify-evenly gap-8 md:flex-row md:gap-4">
            <Card
                heading="Develop well-rounded DCS students"
                content="with fundamental classroom learning through practical experience"
            />
            <Card
                heading="Establish DCS as a center of student innovation"
                content="and excellent in software engineering"
            />
            <Card
                heading="Improve people's lives by producing works"
                content="that advocate the right use of Computer Science and Software Engineering"
            />
        </div>
    </div>
    <div class="flex flex-col gap-8">
        <div class="text-center text-2xl">Vision</div>
        <div class="align-center flex flex-col justify-evenly gap-8 md:flex-row md:gap-4">
            <Card
                heading="Learn"
                content="Create development camps wherein students can enrich their skills in Software Engineering."
            />
            <Card
                heading="Create"
                content="Have a diverse set of software projects to enhance the versatility of UP CSI."
            />
            <Card
                heading="Innovate"
                content="Showcase the quality projects produced by the Department of Computer Science (DCS) and the UP CSI and make them accessible to the public."
            />
        </div>
    </div>
</div>
