<div
    class="flex flex-col items-center justify-between gap-12 rounded-3xl bg-warm-white px-8 py-8 md:px-32 md:py-16 xl:flex-row"
>
    <div class="flex flex-1 flex-col gap-4">
        <slot name="text" />
    </div>
    <div class="w-full flex flex-row items-center justify-center gap-12">
        <slot name="cards" />
    </div>
</div>
