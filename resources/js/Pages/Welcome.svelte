<script lang="ts">
    import MainLayout from '@/Layouts/MainLayout.svelte'
    import AppLogo from '@/components/AppLogo.svelte'
    import Button from '@/components/ui/Button.svelte'
    import { themeManager } from '@/stores'
    import { Link } from '@inertiajs/svelte'

    interface Props {
        laravelVersion: string
        phpVersion: string
    }
    let { laravelVersion, phpVersion }: Props = $props()
</script>

<MainLayout title="Welcome">
    <h1 class="text-2xl font-bold">Welcome to Laravel!</h1>
    <AppLogo class="w-48" />

    <p>Laravel Version: {laravelVersion}</p>
    <p>PHP Version: {phpVersion}</p>
    <p>Welcome to your new Laravel application!</p>
    <p>
        Current Theme: {themeManager.currentTheme}
    </p>
    <Link href={route('welcome')}>Welcome</Link>
    <Button variant="primary" size="md" onclick={() => themeManager.toggleTheme()}>Change Theme</Button>
    <p>
        To get started, check out the <a href="https://laravel.com/docs">Laravel documentation</a>.
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>Bottom</p>
</MainLayout>
