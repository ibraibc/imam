
<template>
    <div class="bg-[#523b35] min-h-screen">
        <Suspense>
            <template #default>
                <div>
                    <NavBar/>
        
                    <ImageGalry/>
                    <Footer/>
                    <BackToTop/>
                    
                </div>
            </template>
            <template #fallback>
                <div class="flex justify-center items-center min-h-screen">
                    <LoadingSpinner/>
                </div>
            </template>
        </Suspense>
    </div>
</template>


<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(()=>import('@/components/navBar.vue'));
const Footer = defineAsyncComponent(()=>import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(()=>import('@/components/BackToTop.vue'));
const LoadingSpinner = defineAsyncComponent(()=>import('@/components/LoadingSpinner.vue'));
const ImageView = defineAsyncComponent(()=>import('@/components/ImageView.vue'));
const ImageGalry = defineAsyncComponent(()=>import('@/components/ImageGalry.vue'));

</script>

<style>
*{
    scrollbar-width: thin;
    scrollbar-color: #111827 #f1f1f1;
}
</style>
