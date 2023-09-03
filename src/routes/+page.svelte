<script>
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';
    import Label from '$lib/components/Label.svelte';
    import TextArea from '$lib/components/TextArea.svelte';
</script>

<section class="prose p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">Learn. <em>Create.</em> Innovate.</h1>
    <p>
        UP CSI is a service-oriented organization. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Animi, hic!
    </p>
</section>
<section class="prose p-8 dark:prose-invert sm:p-12 md:p-16">
    <h1 class="font-heading">What We Do</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus ratione sit enim
        quos quo iure voluptates saepe, praesentium accusamus tempore quas, officiis beatae harum
        animi blanditiis aperiam. Excepturi.
    </p>
    <ul>
        <li>Helping the community...</li>
        <li>Solving your problems...</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
    </ul>
</section>
<section class="p-8 sm:p-12 md:p-16">
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
