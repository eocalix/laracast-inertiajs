<script setup>
    import { computed } from 'vue';
    import Nav from './Nav.vue';
    import { usePage } from '@inertiajs/inertia-vue3';

    const username = computed(() => {
        return usePage().props.value.auth.user.username;
    });
</script>

<template>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My App</h1>

                <p class="text-sm ml-4">Welcome back, {{ username }}!</p>
            </div>
            <Nav></Nav>
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot></slot>
        </div>
    </section>
</template>