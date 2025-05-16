<template >
    <section class=" items-center justify-center mt-10" data-aos="zoom-in-up">
        
        <div class="">
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="max-sm:w-full max-sm:h-full max-sm:flex max-sm:justify-center max-sm:items-center lg:w-[1000px] inline">
        
        <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center  ">
                    <img src="@/assets/w21.avif" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48"  />
                </div>
            </swiper-slide>
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center  ">
                    <img src="@/assets/w29.jpg" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                </div>
            </swiper-slide>
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center  ">
                    <img src="@/assets/w12.png" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48" />
                </div>
            </swiper-slide>
            
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                    <img src="@/assets/w4.jpg" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48"  />
                </div>
            </swiper-slide>
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                    <img src="@/assets/w14.jpeg" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48"  />
                </div>
            </swiper-slide>
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                    <img src="@/assets/w6.jpg" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48"  />
                </div>
            </swiper-slide>
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                    <img src="@/assets/w28.jpg" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48"  />
                </div>
            </swiper-slide>
            <swiper-slide class="relative items-center justify-center max-sm:flex max-sm:justify-center  max-sm:items-center">
                <div class="flex sm:w-full sm:h-96 items-center justify-center ">
                    <img src="@/assets/w9.jpg" class="w-4/5 h-full rounded-lg border-[2px] border-[#161614] shadow-lg max-sm:w-3/5  max-sm:h-48"  />
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

const printme = () => {
    console.log("hi")
}
/*.swiper {
    width: 600px;
    height: 300px;
}
 */
</script>
<style >

.swiper-slide {
    overflow: hidden;
}
</style>