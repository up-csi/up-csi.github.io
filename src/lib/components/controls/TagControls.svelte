<script lang="ts">
    interface Props {
        tags: string[];
        selected: string;
    }

    // eslint-disable-next-line prefer-const
    let { tags, selected = $bindable() }: Props = $props();

    function setTag(tag: string) {
        selected = tag;
    }
</script>

<div class="flex flex-row justify-center">
    <ul
        class="bg-float !m-0 flex max-w-(--breakpoint-sm) list-none flex-row flex-wrap justify-center gap-2 rounded-lg p-1 shadow-lg lg:max-w-fit"
    >
        {#each tags as tag}
            {@const neutral =
                selected === tag ? 'bg-csi-blue text-csi-black' : 'bg-invert/10'}
            <li class="!m-0 p-0">
                <button
                    class="hover:bg-invert hover:text-invert-foreground min-h-10 shrink-0 rounded-md px-6 transition-colors ease-in-out {neutral}"
                    onclick={() => setTag(tag)}
                >
                    {tag}
                </button>
            </li>
        {/each}
    </ul>
</div>