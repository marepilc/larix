import './bootstrap'

import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'
import type { SvelteComponent } from 'svelte'

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<{ default: typeof SvelteComponent }>('./Pages/**/*.svelte', { eager: true })
        return pages[`./Pages/${name}.svelte`]
    },
    setup({ el, App, props }) {
        if (!el) {
            throw new Error('Could not find root element to mount into.')
        }
        mount(App, { target: el, props })
    },
    progress: {
        color: '#B90054',
    },
})
