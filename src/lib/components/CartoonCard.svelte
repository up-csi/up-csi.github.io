<script>
    import src from '$lib/cartoon-card-placeholder.svg';
</script>

<div class="mb-8 max-h-80 w-1/4">
    <div class="rounded-b-[50px] rounded-t-[180px] bg-csi-blue px-2 pt-5">
        <img {src} alt="Corporate Cartoon" />
    </div>
    <div class="leading-6">
        <h1 class="text-center font-dm text-3xl"><slot name="title" /></h1>
        <p class="text-center"><slot /></p>
    </div>
</div>
