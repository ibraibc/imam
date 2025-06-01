<template lang="">
    <section>
        <div class="">
            <div class=" ">
                <img :src="getImage()" alt="" class="" >
            </div>
        </div>
    </section>
</template>
<script setup>
const getImage = () => {
    console.log(localStorage.getItem('imageId'));
    return localStorage.getItem('imageId');
};
</script>
<style lang="">
    
</style>