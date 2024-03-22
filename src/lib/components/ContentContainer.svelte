<div
    class="flex flex-col items-center justify-between gap-12 rounded-3xl bg-[#f6f6f6] px-8 py-8 md:px-32 md:py-16 xl:flex-row dark:bg-[#1d1d1d]"
>
    <div class="flex flex-1 flex-col gap-4">
        <slot name="text" />
    </div>
    <div
        class="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-12 xl:h-full xl:w-1/2 xl:items-start xl:justify-between xl:gap-4"
    >
        <slot name="cards" />
    </div>
</div>
