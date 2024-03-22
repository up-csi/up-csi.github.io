<script>
    import src from '$lib/cartoon-card-placeholder.svg';
</script>

<div class="mb-8 flex w-3/5 flex-col items-center lg:mb-0 lg:w-2/5 xl:w-3/5">
    <div class="w-full rounded-b-[50px] rounded-t-[180px] bg-csi-blue px-2 pt-5">
        <img {src} alt="Corporate Cartoon" />
    </div>
    <div class="leading-6">
        <h1 class="text-center font-dm text-3xl"><slot name="title" /></h1>
        <p class="text-center text-csi-black dark:text-csi-white"><slot /></p>
    </div>
</div>
