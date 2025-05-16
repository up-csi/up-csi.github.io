<script>
    import src from '$lib/assets/lino/lino-sablay.svg';
</script>


<div class="flex flex-row rounded-md bg-csi-grayscale-200 p-5 gap-10 shadow-md shadow-csi-blue">
    <div class="flex flex-row items-center w-1/2 rounded-3xl hidden sm:flex">
        <img {src} alt={"Placeholder"}/>
    </div>

    <div class="flex flex-col gap-3">
        <h1 class="text-3xl font-semibold">Want to commission a project?</h1>

        <!-- this div is an empty div for a color block -->
        <div class="bg-csi-blue-600 w-full h-1"></div>

        <p>
            You may contact UP CSI by sending an email at lino@up-csi.org. Preferably, please include the following information in your email:
        </p>
        <ul class="ml-8 list-disc">
            <li>Brief project overview</li>
            <li>Brief features list</li>
            <li>Other project-specific concerns</li>
        </ul>
        <p>
            UP CSI will get back to you to set an appointment within 5 business days.
        </p>

        <div class="flex flex-row items-center w-full rounded-3xl sm:hidden">
            <img {src} alt={"Placeholder"}/>
        </div>
    </div>
</div>
