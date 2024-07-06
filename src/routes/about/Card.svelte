<script>
    export let src;
    export let bgStyles = 'bg-csi-neutral-200 rounded-t-full rounded-b-xl';
</script>

<div class="flex w-full flex-col gap-2 md:w-1/4">
    <div class={`flex w-full justify-center items-center h-3/5 ${bgStyles}`}>
        <img {src} alt="Placeholder" />
    </div>
    <div class="w-full h-2/5">
        <h1 class="text-2xl">
            <slot name="heading" />
        </h1>
        <p>
            <slot name="content" />
        </p>
    </div>
</div>
