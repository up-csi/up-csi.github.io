<div
    class="flex flex-col items-center justify-between gap-12 rounded-3xl bg-warm-white px-8 py-8 md:px-32 md:py-16 xl:flex-row"
>
    <div class="flex flex-1 flex-col gap-4">
        <slot name="text" />
    </div>
    <div class="w-full flex flex-col items-center justify-center lg:gap-12 xl:gap-4 lg:flex-row xl:w-1/2 xl:h-full xl:items-start xl:justify-between">
        <slot name="cards" />
    </div>
</div>
