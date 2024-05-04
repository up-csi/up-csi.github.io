<script lang='ts'>
    export let src: string;
    export let alt: string;
    export let href: string;
</script>

<div class="flex flex-col w-full md:w-72 h-auto md:h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-csi-neutral-50 dark:bg-csi-neutral-900">
    <img {src} {alt} class="h-64 md:h-48 object-cover m-0 shrink-0"/>
    <div class="flex flex-col gap-2 h-full justify-between overflow-hidden m-3">
        <slot />
        <p class="m-0"><a {href}>More Info</a></p>
    </div>
</div>
