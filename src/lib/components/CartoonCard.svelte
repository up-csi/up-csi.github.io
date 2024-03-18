<script>
    import src from '$lib/cartoon-card-placeholder.svg';
</script>

<div class="mb-8 lg:mb-0 flex flex-col items-center w-3/5 lg:w-2/5 xl:w-3/5">
    <div class="rounded-b-[50px] rounded-t-[180px] bg-csi-blue px-2 pt-5 w-full">
        <img {src} alt="Corporate Cartoon" />
    </div>
    <div class="leading-6">
        <h1 class="text-center font-dm text-3xl"><slot name="title" /></h1>
        <p class="text-center"><slot /></p>
    </div>
</div>
