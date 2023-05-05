<template>
    <small class="text-muted fst-italic" style="font-size: 0.8em">{{ message }}</small>
</template>

<script setup>
import {defineProps} from "vue";

const {message} = defineProps(['message'])

</script>

<style scoped>

</style>
