<script lang="ts">
    // eslint-disable-next-line @typescript-eslint/init-declarations
    export let src: string;
</script>

<div class="flex w-full flex-col gap-2 md:w-1/4">
    <div class="flex h-3/5 w-full items-center justify-center">
        <img {src} alt="Placeholder" class="transition-colors ease-in-out" />
    </div>
    <div class="h-2/5 w-full *:transition-colors *:ease-in-out">
        <h1 class="text-2xl">
            <slot name="heading" />
        </h1>
        <p>
            <slot name="content" />
        </p>
    </div>
</div>
