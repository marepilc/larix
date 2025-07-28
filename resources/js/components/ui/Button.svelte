<script lang="ts">
    import type { Snippet } from 'svelte'

    interface Props {
        variant?: 'primary' | 'secondary' | 'danger'
        size?: 'sm' | 'md' | 'lg'
        disabled?: boolean
        loading?: boolean
        type?: 'button' | 'submit' | 'reset'
        class?: string
        onclick?: () => void
        children?: Snippet
    }

    let {
        variant = 'primary',
        size = 'md',
        disabled = false,
        loading = false,
        type = 'button',
        class: className = '',
        onclick = undefined,
        children,
        ...restProps
    }: Props = $props()

    // Derived wartości dla klas CSS
    const baseClasses =
        'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    // Klasy dla wariantu
    const variantClasses = $derived(
        variant === 'primary'
            ? 'bg-primary text-white hover:bg-blue-700 focus:ring-blue-500'
            : variant === 'secondary'
              ? 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500'
              : variant === 'danger'
                ? 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
                : '',
    )

    // Klasy dla rozmiaru
    const sizeClasses = $derived(
        size === 'sm' ? 'px-2 py-1 text-sm' : size === 'md' ? 'px-4 py-2 text-base' : size === 'lg' ? 'px-6 py-3 text-lg' : '',
    )

    const allClasses = $derived(`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim())
</script>

<!-- Renderuj jako button -->
<button class={allClasses} disabled={disabled || loading} {onclick} {...restProps}>
    {#if children}
        {@render children()}
    {/if}
</button>
