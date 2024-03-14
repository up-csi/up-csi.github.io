<script>
    import src from '$lib/lino-sablay.svg';
</script>

<div class="flex w-full flex-col gap-2 md:w-1/4">
    <img {src} alt="Placeholder" class="w-full" />
    <div class="w-full">
        <h1 class="text-2xl">
            <slot name="heading" />
        </h1>
        <p>
            <slot name="content" />
        </p>
    </div>
</div>
