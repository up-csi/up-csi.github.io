<script>
    /** @type {String} */
    export let name = '';
</script>

<!-- Carousel Card with filler content -->
<div class="w-56 flex-initial rounded-full bg-blue p-5 text-center font-inter snap-center">
    <!-- Sample Text -->
    <slot class="m-0">{name}</slot>
    <!-- Sample Logo -->
</div>
