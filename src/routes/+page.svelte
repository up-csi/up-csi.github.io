<script>
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';
    import Label from '$lib/components/Label.svelte';
    import TextArea from '$lib/components/TextArea.svelte';
</script>

<section class="prose max-w-2xl p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">Learn. Create. <em>Innovate.</em></h1>
    <p>
        UP CSI is a service-oriented student organization aimed towards the enhancement of student
        learning by working with real-world software projects.
    </p>
</section>
<section class="prose max-w-2xl max-w-full p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">What We Do</h1>
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
