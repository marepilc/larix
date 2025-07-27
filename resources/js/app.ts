import './bootstrap'

import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true })
        return pages[`./Pages/${name}.svelte`] as any
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
