<script>
    export let name = '';
</script>

<!-- Carousel Card with filler content -->
<div class="w-48 snap-center rounded-full bg-csi-blue p-4 text-center font-inter text-csi-black">
    <!-- Sample Text -->
    <slot class="m-0">{name}</slot>
    <!-- Sample Logo -->
</div>
