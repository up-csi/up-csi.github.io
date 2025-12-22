<script>
    import Card from '$lib/components/cards/MissionVisionCard.svelte';
    import create from '$lib/assets/cartoons/create.svg';
    import develop from '$lib/assets/cartoons/develop.svg';
    import establish from '$lib/assets/cartoons/establish.svg';
    import improve from '$lib/assets/cartoons/improve.svg';
    import innovate from '$lib/assets/cartoons/innovate.svg';
    import learn from '$lib/assets/cartoons/learn.svg';
</script>

<section
    class="prose bg-muted text-muted-foreground font-dm flex max-w-full flex-col gap-16 rounded-3xl px-8 py-12 transition-colors ease-in-out md:px-12"
    id="mission-vision"
>
    <div class="flex flex-col gap-8">
        <div class="text-center text-2xl">Core Messages</div>

        <div class="align-center flex flex-col justify-evenly gap-8 md:flex-row md:gap-4">
            <Card src={develop}>
                <span slot="heading">Purpose</span>
                <span slot="content">
                    UP CSI empowers <b class="text-xl">students to become professionals</b>, and
                    professionals to remain lifelong learners. The organization and its members
                    strive to
                    <b class="text-xl"
                        >constantly improve, engineer solutions, and serve the community.</b
                    ></span
                >
            </Card>
            <Card src={establish}>
                <span slot="heading">Mission</span>
                <span slot="content"
                    >To <b class="text-xl">provide opportunities</b> wherein students can enhance
                    their software engineering skills and their innovative thinking. To
                    <b class="text-xl">develop and showcase a diverse set of software projects.</b
                    ></span
                >
            </Card>
            <Card src={improve}>
                <span slot="heading">Vision</span>
                <span slot="content">
                    To establish <b class="text-xl"
                        >UP CSI as the premier organization for software engineering and student
                        innovation</b
                    > whose members are capable of developing practical solutions to everyday problems.</span
                >
            </Card>
        </div>
    </div>
    <div class="flex flex-col gap-8">
        <div class="text-center text-2xl">CSI Tagline</div>
        <div class="align-center flex flex-col justify-evenly gap-8 md:flex-row md:gap-4">
            <Card src={learn}>
                <span slot="heading">Learn</span>
                <span slot="content">
                    We strive to <b class="text-xl"
                        >continuously grow by embracing new knowledge and experiences</b
                    >, using both success and failure as stepping stones toward greater service and
                    impact.</span
                >
            </Card>
            <Card src={create}>
                <span slot="heading">Create</span>
                <span slot="content">
                    We <b class="text-xl">build solutions and opportunities</b> that shape the future
                    we aspire to, turning ideas into tangible outcomes.</span
                >
            </Card>
            <Card src={innovate}>
                <span slot="heading">Innovate</span>
                <span slot="content">
                    We push boundaries through <b class="text-xl">creative problem solving</b>,
                    finding new ways forward while remaining grounded in professional and ethical
                    principles.</span
                >
            </Card>
        </div>
    </div>
</section>
