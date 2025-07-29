<script lang="ts">
    import { router } from '@inertiajs/svelte'
    import { fly } from 'svelte/transition'

    import AppLogo from './AppLogo.svelte'
    import Button from './ui/Button.svelte'

    interface Props {
        class?: string
    }

    let { class: className = '' }: Props = $props()
    let menuOpened = $state(false)
    function toggleMenu() {
        menuOpened = !menuOpened
    }
</script>

<nav class="bg-surface border-secondary sticky top-0 z-50 border-b shadow-sm {className}">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
                <a
                    href="/"
                    onclick={(e) => {
                        e.preventDefault()
                        router.visit('/')
                    }}
                    class="flex-shrink-0"
                >
                    <AppLogo class="h-8 w-auto" />
                </a>
            </div>

            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a
                        href="/"
                        onclick={(e) => {
                            e.preventDefault()
                            router.visit('/')
                        }}
                        class="text-ink hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        onclick={(e) => {
                            e.preventDefault()
                            router.visit('/about')
                        }}
                        class="text-ink hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        onclick={(e) => {
                            e.preventDefault()
                            router.visit('/contact')
                        }}
                        class="text-ink hover:text-primary rounded-md px-3 py-2 text-sm font-medium transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>

            <div class="hidden md:block">
                <div class="ml-4 flex items-center space-x-3 md:ml-6">
                    <Button variant="outline" size="sm">Sign In</Button>
                    <Button variant="primary" size="sm">Sign Up</Button>
                </div>
            </div>

            <div class="md:hidden">
                <button
                    type="button"
                    class="text-ink hover:text-primary focus:ring-primary p-2 focus:ring-2 focus:outline-none focus:ring-inset"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onclick={toggleMenu}
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</nav>

{#if menuOpened}
    <div class="fixed top-16 right-0 bottom-0 left-0 z-40 md:hidden" id="mobile-menu" transition:fly={{ x: '100vw', duration: 500, opacity: 1 }}>
        <div class="bg-surface border-secondary h-full space-y-1 border-t px-2 pt-2 pb-3 shadow-lg sm:px-3">
            <a
                href="/"
                onclick={(e) => {
                    e.preventDefault()
                    router.visit('/')
                    toggleMenu()
                }}
                class="text-ink hover:text-primary block rounded-md px-3 py-2 text-base font-medium transition-colors"
            >
                Home
            </a>
            <a
                href="/about"
                onclick={(e) => {
                    e.preventDefault()
                    router.visit('/about')
                    toggleMenu()
                }}
                class="text-ink hover:text-primary block rounded-md px-3 py-2 text-base font-medium transition-colors"
            >
                About
            </a>
            <a
                href="/contact"
                onclick={(e) => {
                    e.preventDefault()
                    router.visit('/contact')
                    toggleMenu()
                }}
                class="text-ink hover:text-primary block rounded-md px-3 py-2 text-base font-medium transition-colors"
            >
                Contact
            </a>
            <div class="border-secondary border-t pt-4 pb-3">
                <div class="flex items-center space-x-3 px-3">
                    <Button variant="outline" size="sm" class="flex-1">Sign In</Button>
                    <Button variant="primary" size="sm" class="flex-1">Sign Up</Button>
                </div>
            </div>
        </div>
    </div>
{/if}
