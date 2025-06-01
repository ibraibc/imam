<template >
    <section class=" items-center justify-center mt-10" data-aos="zoom-in-up">

        <div >
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules"
                class="max-sm:w-full max-sm:h-full max-sm:flex max-sm:justify-center max-sm:items-center lg:w-full">
                
                <swiper-slide >
                    <div class="flex sm:w-full sm:h-96 items-center justify-center  bg-gradient-to-r from-[#bea85f] to-[#bb8451]  rounded-lg ">
                        <div class="">
                            <ul class="grid lg:grid-cols-2" >
                                <div class="flex items-center justify-center border-r border-[#353432]">
                                    <div class="font-serif ml-16 mr-8"> 
                                        Aluminum windows are often associated with businesses and commercial structures. Aluminum windows for your home take the benefits of commercial windows and offer longevity and reliability you won’t see with vinyl or wooden windows.They are lightweight, recyclable, and corrosion-resistant.We strictly according to ISO 9001 certificate to help you lower your costs while getting high quality. Our team is on-site to monitor output providing great service and on-time delivery. 
                                    
                                    </div>
                                </div>
                                <div class="flex items-center justify-center">
                                <img src="@/assets/w20.jpg"
                                    class="w-[70%] h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                                </div>
                            </ul>
                        </div>
                    </div>
                
                </swiper-slide>
                
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center  ">
                        <img src="@/assets/w1.jpg"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center  ">
                        <img src="@/assets/w12.png"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center  ">
                        <img src="@/assets/w21.avif"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                        <img src="@/assets/w4.jpg"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                        <img src="@/assets/w14.jpeg"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                        <img src="@/assets/w6.jpg"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                        <img src="@/assets/w2.png"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                    <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                        <img src="@/assets/w9.jpg"
                            class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script >
// import Swiper bundle with all modules installed
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
};

import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        category: 'web development',
        image: 'src/assets/no1.jpg',
        title: 'مقاطع بدون معالجة سطحية (غير مؤكسدة)',
        title_english: 'High-Quality Anodized Extruded Aluminium Window Profiles',
        description: 'مقاطع ألمنيوم بدون أي معالجة سطحية أو تلوين، وتستخدم للأغراض الصناعية',
        description_english: "Aluminum windows are often associated with businesses and commercial structures. Aluminum windows for your home take the benefits of commercial windows and offer longevity and reliability you won’t see with vinyl or wooden windows.They are lightweight, recyclable, and corrosion-resistant.We strictly according to ISO 9001 certificate to help you lower your costs while getting high quality. Our team is on-site to monitor output providing great service and on-time delivery.",
    },
]);
</script>
<style >.swiper-slide {
    overflow: hidden;
}</style>