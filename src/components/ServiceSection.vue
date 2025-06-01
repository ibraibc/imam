<template>
    <section class="text-white mt-10 max-sm:mt-10" id="other_services">
        <div class="bx-4 xl:pl-16">
            <h1 class="text-4xl font-bold text-white mb-4">Other Servcices</h1>
        </div>
        <div class="py-6 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-gradient-to-tr  from-[#523b35] to-[#252525] hover:from-[#785d47] hover:to-[#523b35] shadow-lg border border-[#b7b3a4]">
                <div>
                    <img :src="service.image" alt="service image" class="w-full h-48">
                    
                <div class="text-center ">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.image  }}
                        {{ service.name  }}
                    </h3>
                    <p class="text-gray pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const services = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'first project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!',
        image: "src/assets/kit4.jpg"
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/fffeee/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png',
        name: 'Technical Writing',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!',
        image: "src/assets/kit5.jpg"
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/external-solid-design-circle/100/ffffff/external-Mobile-Development-digital-marketing-solid-design-circle.png',
        name: 'Mobile Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!',
        image: "src/assets/kit6.jpg"
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/email-open.png',
        name: 'WEB DEVELOPMENT',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!',
        image: "src/assets/kit7.jpg"
    },
    {
        id: 5,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png',
        name: 'Graphic Design',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!',
        image: "src/assets/kit8.jpg"
    },
    {
        id: 6,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/web-design.png',
        name: 'Web Design',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!',
        image: "src/assets/kit9.jpg"
    },
])

</script>