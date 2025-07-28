export type Theme = 'light' | 'dark'

class ThemeManager {
    private theme = $state<Theme>('light')

    constructor() {
        const storedTheme = localStorage.getItem('theme') as Theme | null
        this.theme = storedTheme || 'light'

        if (typeof document !== 'undefined') {
            this.applyTheme(this.theme)
        }
    }

    get currentTheme(): Theme {
        return this.theme
    }

    private applyTheme(theme: Theme) {
        const html = document.documentElement
        html.classList.remove('light', 'dark')
        html.classList.add(theme)
    }

    setTheme(theme: Theme) {
        if (this.theme === theme) {
            return
        }
        this.theme = theme
        try {
            localStorage.setItem('theme', theme)
        } catch (error) {
            console.error('Unable to persist theme:', error)
        }
        this.applyTheme(theme)
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light'
        this.setTheme(newTheme)
    }
}

export const themeManager = new ThemeManager()
