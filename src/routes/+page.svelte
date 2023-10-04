<script>
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';
    import Label from '$lib/components/Label.svelte';
    import TextArea from '$lib/components/TextArea.svelte';
</script>

<section class="prose max-w-2xl p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">Learn. Create. <em>Innovate.</em></h1>
    <h2 class="font-heading">University of the Philippines Center for Student Innovations</h2>
    <p>
        We are a service-oriented organization aimed towards the enhancement of student learning
        from the University of the Philippines Diliman, Department of Computer Science by working
        with real-world projects.
    </p>
</section>
<section class="prose max-w-2xl max-w-full p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">Our Mission</h1>
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
<section class="prose max-w-2xl max-w-full p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">Our Vision</h1>
    <ul>
        <li>
            Develop well-rounded DCS students with fundamental classroom learning through practical
            experience.
        </li>
        <li>
            Establish DCS as a center of student innovation and excellent in software engineering.
        </li>
        <li>
            Improve people’s lives by producing works that advocate the right use of Computer
            Science and Software Engineering.
        </li>
    </ul>
</section>
<section class="prose p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">Connect with Us</h1>
    <form
        class="block flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
        id="contact"
        on:submit|preventDefault|stopPropagation|capture="{() => alert('Work in progress!')}"
    >
        <Label>
            <span>Your Email Address</span>
            <Input type="email" name="email" placeholder="user@example.com" />
        </Label>
        <Label>
            <span>Subject</span>
            <Input name="sub" placeholder="Hello there!" />
        </Label>
        <Label>
            <span>Message</span>
            <TextArea rows="{6}" name="msg" placeholder="Type your message here." />
        </Label>
        <Button type="submit">Submit</Button>
    </form>
</section>
