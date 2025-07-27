<script lang="ts">
    import { Link } from "@inertiajs/svelte"
    import MainLayout from "@/Layouts/MainLayout.svelte";
    interface Props {
        laravelVersion: string;
        phpVersion: string;
    
    }
    let { laravelVersion, phpVersion }: Props = $props();
</script>

<MainLayout title="Welcome">
    <h1>Welcome to Laravel</h1>
    
    <p>Laravel Version: {laravelVersion}</p>
    <p>PHP Version: {phpVersion}</p>
    <p>Welcome to your new Laravel application!</p>
    <Link href={route('welcome')}>Welcome</Link>
    <p>
        To get started, check out the <a href="https://laravel.com/docs"
            >Laravel documentation</a
        >.
    </p>
</MainLayout>
