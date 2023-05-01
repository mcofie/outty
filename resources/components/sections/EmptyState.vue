<template>
    <div class="row justify-content-center h-100 align-content-center">
        <div class="col-md-6">
            <ul class="list-unstyled text-center mt-5">
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
