<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
    import NavLink from './NavLink.vue';
</script>

<template>
    <!-- nav>ul>li*3>a[href=#] -->
    <nav class="mt-6">
        <ul class="list-disc">
            <li>
                <NavLink href="/" v-bind:active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" v-bind:active="$page.component === 'Users'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" v-bind:active="$page.component === 'Settings'">Settings</NavLink>
            </li>
            <li>
                <Link href="/logout" class="text-blue-500 hover:underline" method="post" v-bind:data="{ foo: 'bar' }" as="button">Log Out</Link>
            </li>
        </ul>
    </nav>
</template>