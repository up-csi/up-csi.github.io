<script>
    export let src = '$lib/lino-sablay.svg';
    export let bgStyles = 'bg-csi-neutral-200 rounded-t-full rounded-b-xl';
</script>

<div class="flex w-full flex-col gap-2 md:w-1/4">
    <div class={`flex h-3/5 w-full items-center justify-center ${bgStyles}`}>
        <img {src} alt="Placeholder" />
    </div>
    <div class="h-2/5 w-full">
        <h1 class="text-2xl">
            <slot name="heading" />
        </h1>
        <p>
            <slot name="content" />
        </p>
    </div>
</div>
