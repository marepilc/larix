<script lang="ts">
    import type { Snippet } from "svelte"
    const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

    interface Props {
        title?: string;
        children?: Snippet;
    }

    let { title = undefined, children = undefined }: Props = $props();
</script>

<svelte:head>
  <title>{title ? `${title} - ${appName}` : appName}</title>
</svelte:head>

<main>
    <p class="text-lg font-bold">Layout</p>
    {#if children}
    {@render children()}
    {/if}
</main>