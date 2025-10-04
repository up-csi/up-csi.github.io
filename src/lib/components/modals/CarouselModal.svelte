<script lang="ts">
    import CloseIcon from '@iconify/icons-heroicons/x-mark';
    import Icon from '@iconify/svelte';
    import LeftArrow from '@iconify/icons-heroicons/arrow-left-circle';
    import RightArrow from '@iconify/icons-heroicons/arrow-right-circle';

    import { scale } from 'svelte/transition';

    import placeholder from '$lib/assets/lino/lino-sablay.svg';

    /* eslint-disable prefer-const */
    let {
        showModal = $bindable(),
        currentIndex = $bindable(),
        items,
        nextItem,
        prevItem,
        goToItem,
    } = $props();
    /* eslint-enable prefer-const */

    const currentItem = $derived(items[currentIndex]);
    let dialogRef: HTMLDialogElement | undefined = $state();

    $effect(() => {
        if (dialogRef) if (showModal && !dialogRef.open) dialogRef.showModal();
    });

    function requestDialogClose() {
        showModal = false;
    }

    function handleNativeDialogClose() {
        if (showModal) showModal = false;
    }

    function handleDialogCancel(item: Event) {
        item.preventDefault();
        requestDialogClose();
    }

    function handleBackdropClick(item: Event) {
        if (item.target === dialogRef) requestDialogClose();
    }
</script>

{#if showModal}
    <dialog
        bind:this={dialogRef}
        onclose={handleNativeDialogClose}
        oncancel={handleDialogCancel}
        onmousedown={handleBackdropClick}
        class="font-dm shadow-csi-blue text-foreground bg-background mx-auto my-auto h-4/5 w-3/4 overflow-y-auto rounded-3xl p-0 shadow-md sm:w-2/3 md:w-3/5 lg:w-1/2"
        in:scale={{ duration: 200, start: 0.95, opacity: 0.75 }}
        out:scale={{ duration: 150, start: 0.95 }}
    >
        <div class="flex flex-col gap-2 overflow-y-auto sm:p-4">
            <div class="mx-8 mt-4 flex items-start justify-between">
                <div class="flex flex-wrap gap-2">
                    {#if currentItem.state}
                        <span
                            class="bg-csi-blue flex h-auto w-fit items-center rounded-lg px-4 py-1 text-xs font-semibold text-white shadow sm:text-sm"
                            >{currentItem.state}</span
                        >
                    {/if}
                    {#if currentItem.tag}
                        <span
                            class="bg-csi-blue flex h-auto w-fit items-center rounded-lg px-4 py-1 text-xs font-semibold text-white shadow sm:text-sm"
                            >{currentItem.tag}</span
                        >
                    {/if}
                    {#if currentItem.type}
                        <span
                            class="bg-csi-blue flex h-auto w-fit items-center rounded-lg px-4 py-1 text-xs font-semibold text-white shadow sm:text-sm"
                            >{currentItem.type}</span
                        >
                    {/if}
                </div>
                <div class="ml-2">
                    <button
                        aria-label="Close Modal"
                        onclick={requestDialogClose}
                        class="p-1 text-gray-500 hover:text-gray-700"
                    >
                        <Icon icon={CloseIcon} class="h-6 w-6 cursor-pointer" />
                    </button>
                </div>
            </div>

            <div class="mx-8 flex flex-col md:text-lg">
                <h1 class=" text-xl font-bold sm:text-2xl md:text-4xl">{currentItem.name}</h1>
                <p class=" sm:text-md text-sm md:text-lg">
                    {#if currentItem.duration}
                        {currentItem.duration}
                    {:else}
                        No data available for duration
                    {/if}
                </p>
            </div>

            <div class="grid grid-cols-[50px_1fr_50px] grid-rows-[1fr_50px] py-2">
                <button
                    aria-label="Previous slide"
                    class="col-start-1 row-start-2 flex-none shrink-0 self-center p-1 md:row-start-1"
                    onclick={prevItem}
                >
                    <Icon
                        icon={LeftArrow}
                        class="hover:text-csi-blue mr-2 cursor-pointer text-4xl "
                    />
                </button>
                <div class="col-span-3 mx-4 md:col-span-1 md:mx-0">
                    {#if currentItem.picture}
                        <enhanced:img
                            src={currentItem.picture}
                            alt="dummy"
                            loading="lazy"
                            class="m-0 aspect-square w-full rounded-xl object-cover md:h-90"
                        />
                    {:else}
                        <img
                            src={placeholder}
                            alt="UP CSI Logo Placeholder"
                            class="m-0 aspect-square w-full rounded-xl object-cover md:h-90"
                        />
                    {/if}
                </div>
                <div
                    class="bg-background col-span-1 col-start-2 row-start-2 flex items-center justify-center space-x-3 pt-4 md:col-span-3 md:col-start-1"
                >
                    {#each items as item, i (i)}
                        <button
                            aria-label="Go to slide {i}"
                            aria-current="true"
                            onclick={() => {
                                goToItem(i);
                            }}
                            class={[
                                'focus-visible:ring-csi-blue focus-visible:ring-offset-muted h-2.5 w-2.5 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                                item === currentItem ? 'bg-csi-blue' : 'bg-gray-300',
                                { 'hover:bg-gray-400': item !== currentItem },
                            ]}
                        ></button>
                    {/each}
                </div>
                <button
                    aria-label="Next slide"
                    class="col-start-3 row-start-2 flex-none shrink-0 self-center p-1 md:row-start-1"
                    onclick={nextItem}
                >
                    <Icon
                        icon={RightArrow}
                        class="hover:text-csi-blue ml-2 cursor-pointer text-4xl  "
                    />
                </button>
            </div>
            <div class="mx-8 mt-4 flex items-start justify-between">
                <p class=" sm:text-md text-sm md:text-lg">
                    {currentItem.description}
                </p>
            </div>
        </div>
    </dialog>
{/if}
