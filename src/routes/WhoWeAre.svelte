<script>
    import src from '$lib/lino-sablay.svg';
    import BlackButton from '$lib/components/BlackButton.svelte';
</script>

<div class='flex flex-col md:flex-row gap-12 items-center justify-center font-dm'>
    <div class='w-full md:w-2/5 flex justify-center items-center bg-csi-white rounded-3xl'>
        <img class='w-4/5 md:w-full' {src} alt='Placeholder' />
    </div>
    <div class='w-full px-2 md:w-1/2 flex flex-col gap-6 text- dark:text-csi-white'>
        <h1>Who we are</h1> 
        <p class='text-xl md:text-2xl'>
            We are a service-oriented organization aimed towards the enhancement of student learning from the University of the Philippines Diliman, Department of Computer Science by working with real-world projects.
        </p>
        <div class='flex justify-center md:block'>
            <BlackButton>
                <span>See About</span>
            </BlackButton>
        </div>
    </div>
</div>