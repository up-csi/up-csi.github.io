<script>
    import Card from './Card.svelte';
    import create from '$lib/cartoons/create.svg';
    import develop from '$lib/cartoons/develop.svg';
    import establish from '$lib/cartoons/establish.svg';
    import improve from '$lib/cartoons/improve.svg';
    import innovate from '$lib/cartoons/innovate.svg';
    import learn from '$lib/cartoons/learn.svg';
</script>

<section
    class="flex flex-col gap-16 rounded-3xl bg-csi-neutral-50 px-8 py-12 font-dm text-csi-black transition-colors duration-300 ease-in-out md:px-12 dark:bg-csi-neutral-950 dark:text-csi-white"
>
    <div class="flex flex-col gap-8">
        <div class="text-center text-2xl">Mission</div>
        <div class="align-center flex flex-col justify-evenly gap-8 md:flex-row md:gap-4">
            <Card src={develop}>
                <span slot="heading">Develop well-rounded DCS students</span>
                <span slot="content"
                    >with fundamental classroom learning through practical experience</span
                >
            </Card>
            <Card src={establish}>
                <span slot="heading">Establish DCS as a center of student innovation</span>
                <span slot="content">and excellent in software engineering</span>
            </Card>
            <Card src={improve}>
                <span slot="heading">Improve people's lives by producing works</span>
                <span slot="content"
                    >that advocate the right use of Computer Science and Software Engineering</span
                >
            </Card>
        </div>
    </div>
    <div class="flex flex-col gap-8">
        <div class="text-center text-2xl">Vision</div>
        <div class="align-center flex flex-col justify-evenly gap-8 md:flex-row md:gap-4">
            <Card src={learn}>
                <span slot="heading">Learn</span>
                <span slot="content"
                    >Create development camps wherein students can enrich their skills in Software
                    Engineering.</span
                >
            </Card>
            <Card src={create}>
                <span slot="heading">Create</span>
                <span slot="content"
                    >Have a diverse set of software projects to enhance the versatility of UP CSI.</span
                >
            </Card>
            <Card src={innovate}>
                <span slot="heading">Innovate</span>
                <span slot="content"
                    >Showcase the quality projects produced by the Department of Computer Science
                    (DCS) and the UP CSI and make them accessible to the public.</span
                >
            </Card>
        </div>
    </div>
</section>
