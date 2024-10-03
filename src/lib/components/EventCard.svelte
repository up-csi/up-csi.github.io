<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let dates: string;
    // eslint-disable-next-line init-declarations
    export let description: string;
    // eslint-disable-next-line init-declarations
    export let src: string;
    // eslint-disable-next-line init-declarations
    export let state: string;
    // eslint-disable-next-line init-declarations
    export let title: string;
    // eslint-disable-next-line init-declarations
    export let type: string;
    // eslint-disable-next-line init-declarations
    export let url: string;
</script>

<div
    class="flex h-auto w-full flex-col overflow-hidden rounded-2xl bg-csi-neutral-50 shadow-lg md:h-[32rem] md:w-72 dark:bg-csi-neutral-900"
>
    <img {src} alt={title} loading="lazy" class="m-0 h-64 shrink-0 object-cover md:h-48" />
    <div class="m-3 flex h-full flex-col justify-between gap-2 overflow-hidden">
        <p class="m-0">{state} - {type}</p>
        <h2 class="m-0">{title}</h2>
        <p class="m-0">{dates}</p>
        <p class="m-0 grow overflow-hidden">{description}</p>
        <p class="m-0"><a href={url}>More Info</a></p>
    </div>
</div>
