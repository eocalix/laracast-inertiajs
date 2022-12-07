<script setup>
const props = defineProps({
    name: String,
    frameworks: Array
})
</script>

<template>
    <h1>Hello, {{ name }}</h1>
    <p>In this series, we will use the following frameworks:</p>
    <ul>
        <li v-for="framework of frameworks">{{ framework }}</li>
    </ul>
</template>