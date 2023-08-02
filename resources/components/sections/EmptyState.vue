<template>
    <div class="row justify-content-center align-content-center vh-100">
        <div class="col-md-6">
            <ul class="list-unstyled text-center">
                <li><h1>{{ title }}</h1></li>
                <li><p>{{ message }}</p></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const {title, message} = defineProps(['title', 'message'])

</script>

<style scoped>

</style>
