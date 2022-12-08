<script setup>
    import { Link } from '@inertiajs/inertia-vue3';

    const props = defineProps({
        active: Boolean,
    })
</script>

<template>
    <Link class="text-blue-500 hover:underline" v-bind:class="{ 'font-bold underline' : active }">
        <slot></slot>
    </Link>
</template>