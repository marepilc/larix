<script lang="ts">
    import type { Snippet } from 'svelte'

    interface Props {
        variant?: 'primary' | 'secondary' | 'outline' | 'danger'
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

    const baseClasses =
        'inline-flex items-center justify-center transition-all duration-200 focus:ring-1 focus:ring-offset-2 focus:ring-offset-surface focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'

    const variantClasses = $derived(
        variant === 'primary'
            ? 'bg-primary text-surface hover:bg-primary/90 focus:ring-primary'
            : variant === 'secondary'
              ? 'bg-secondary text-ink hover:bg-secondary/90 focus:ring-secondary'
              : variant === 'outline'
                ? 'bg-transparent text-primary border border-primary hover:bg-primary/10 focus:ring-primary'
                : variant === 'danger'
                  ? 'bg-danger text-ink hover:bg-danger/90 focus:ring-danger'
                  : '',
    )

    const sizeClasses = $derived(
        size === 'sm'
            ? 'px-2 py-1 text-sm rounded-sm'
            : size === 'md'
              ? 'px-4 py-2 text-base rounded-md'
              : size === 'lg'
                ? 'px-6 py-3 text-lg rounded-lg'
                : '',
    )

    const allClasses = $derived(`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim())

    const spinnerSize = $derived(size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5')
</script>

<button class={allClasses} disabled={disabled || loading} {onclick} {...restProps}>
    {#if loading}
        <svg class="{spinnerSize} mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    {/if}
    {#if children}
        {@render children()}
    {/if}
</button>
