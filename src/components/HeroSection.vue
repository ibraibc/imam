<template>
    <section class="relative w-full bg-[#b7b3a4]" data-aos="zoom-in-up">


        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative p-5 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <div class="flex justify-center ">
                            <img src="@/assets/logo.png" alt="AL Imam " class=" w-64 p-2 border-2 border-[#523b35]">
                        </div>
                        <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-5xl">
                            <span class="pt-4 pb-2 flex justify-center text-transparent bg-clip-text bg-[#523b35] font-serif">
                                AL Imam Company
                            </span>
                        </h1>
                    </div>
                    <p class="flex justify-center pt-2 text-center lg:text-left mx-auto max-w-xl">
                    <div v-if="checkLang('arabic')" dir="rtl">
                        {{ preview.text_ara }}
                    </div>
                    <div v-if="checkLang('english')">
                        {{ preview.text_eng }}
                    </div>
                    </p>
                </div>
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[24rem] lg:w-full items-center relative  
                                lg:min-h-[none] lg:h-full lg:justify-center
                                md:h-96 md:justify-center 
                                sm:h-40 sm:justify-center 
                                max-sm:flex max-sm:justify-center max-sm:h-36 max-sm:min-h-[0rem]">
                        <!--<div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>-->
                        <div
                            class="border border-dotted border-4 border-[#523b35]  p-2 absolute z-10 -translate-y-1/2 top-1/2 lg:right-5 md:right-40 max-sm:h-auto ">
                            <img src="@/assets/kit12.jpg" alt="Hero pic" width="400" height="auto" loading="lazy"
                                class="  object-fit max-sm:w-40">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { ref } from 'vue';
const preview = ref({
    text_eng: "AL Imam company is a kitchen selling company",
    text_ara: "نحن شركة بردي من كبريات شركات الورق وصناعة الليبل في مصر تأسست الشركة سنة ٢٠١٦ في مصر واصبحت رائدة في مجال تحويل الورق في مصر وللشركة فرع لها في العراق سوف يعمل في مجال تحويل الألمنيوم وصناعة قواطع الألمنيوم المستخدمه في الأبواب والشبابيك والديكورات ، وانتاج صاج المنيوم الفويل ، وسحب الحديد و والمعادن الأخرى"
});

const checkLang = (lang) => {
    if (lang == localStorage.getItem('lang')) {

        return true;
    }
}


/*flex w-full h-96 items-center relative  
                                lg:min-h-[none] lg:h-full lg:w-full
                                md:h-96 md:justify-center 
                                sm:h-40 sm:justify-center 
                                max-sm:justify-center max-sm:h-36" */
</script>