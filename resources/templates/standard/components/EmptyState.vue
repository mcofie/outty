<template>
    <div class="row justify-content-center align-content-center vh-100">
        <div class="col-md-8 col-lg-6 col-xl-6 col-10">
            <ul class="list-unstyled text-center">
                <li class="my-3">
                    <img src="../assets/imgs/folder.png" class="img-fluid w-50 align-self-center text-center mt-4"/>
                </li>
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
