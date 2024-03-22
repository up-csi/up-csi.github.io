<script>
    /** @type {String} */
    export let name = '';
</script>

<!-- Carousel Card with filler content -->
<div class="w-56 flex-initial snap-center rounded-full bg-blue p-5 text-center font-inter">
    <!-- Sample Text -->
    <slot class="m-0">{name}</slot>
    <!-- Sample Logo -->
</div>
