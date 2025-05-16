<script>
    import src from '$lib/assets/lino/lino-sablay.svg';
</script>

<div class="bg-csi-grayscale-200 shadow-csi-blue flex flex-row gap-10 rounded-md p-5 shadow-md">
    <div class="flex hidden w-1/2 flex-row items-center rounded-3xl sm:flex">
        <img {src} alt="Placeholder" />
    </div>

    <div class="flex flex-col gap-3">
        <h1 class="text-3xl font-semibold">Want to commission a project?</h1>

        <!-- this div is an empty div for a color block -->
        <div class="bg-csi-blue-600 h-1 w-full"></div>

        <p>
            You may contact UP CSI by sending an email at lino@up-csi.org. Preferably, please
            include the following information in your email:
        </p>
        <ul class="ml-8 list-disc">
            <li>Brief project overview</li>
            <li>Brief features list</li>
            <li>Other project-specific concerns</li>
        </ul>
        <p>UP CSI will get back to you to set an appointment within 5 business days.</p>

        <div class="flex w-full flex-row items-center rounded-3xl sm:hidden">
            <img {src} alt="Placeholder" />
        </div>
    </div>
</div>
