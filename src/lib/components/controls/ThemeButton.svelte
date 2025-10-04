<script>
    import { onMount } from 'svelte';

    import Icon from '@iconify/svelte';

    import Moon from '@iconify/icons-heroicons/moon-solid';
    import Sun from '@iconify/icons-heroicons/sun-solid';

    const KEY = 'theme';

    function getTheme() {
        const result = localStorage.getItem(KEY);
        const media = matchMedia('(prefers-color-scheme: dark)');
        return result === null ? media.matches : Boolean(JSON.parse(result));
    }

    let isDark = $derived(false);
    onMount(() => {
        // HACK: only invoke this in the browser
        isDark = getTheme();
    });

    function toggle() {
        isDark = !isDark;
        localStorage.setItem(KEY, isDark ? '1' : '0');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
    }
</script>

<svelte:head>
    <script>
        const result = localStorage.getItem('theme');
        const media = matchMedia('(prefers-color-scheme: dark)');
        initial_theme = result === null ? media.matches : Boolean(JSON.parse(result));

        document.documentElement.setAttribute('data-theme', initial_theme ? 'dark' : '');
    </script>
</svelte:head>

<button
    class="border-muted hover:bg-muted/25 rounded-full border p-2 transition-colors hover:shadow-inner"
    onclick={toggle}
>
    <Icon icon={isDark ? Sun : Moon} width="18" height="18" />
</button>
