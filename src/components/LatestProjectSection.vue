<template>
    <section class="text-white mt-20" id="products">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> Our Products</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['', '', '']"
                        :key="category" @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                    :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">                    
                    <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                    hidden  transition-all duration-500"> 
                        <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.webURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                </path>
                            </svg></a><a
                            class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.gitURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></a>
                    </div>
                </div>
                <div v-if="checkLang('english')" dir='ltr' class="text-white rounded-b-xl mt-3 bg-gradient-to-tr from-[#5b5f70] to-[#ec7d15] shadow-lg border border-[#b17f23] py-6 px-4">
                    <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title_english }}</h3>
                    <p class="text-[#ADB7BE]">{{ project.description_english }}</p>
                    <div class="flex flex-wrap p-2.5">
                        <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                        style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                    
                    </div>
                    </div>
                </div>
                <div v-if="checkLang('arabic')" dir="rtl" class="text-white rounded-b-xl mt-3 bg-gradient-to-tr from-[#5b5f70] to-[#ec7d15] shadow-lg border border-[#b17f23] py-6 px-4">
                    <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                    <p class="text-[#ADB7BE]">{{ project.description }}</p>
                    <div class="flex flex-wrap p-2.5">
                        <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                        style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                    
                    </div>
                    </div>
                </div>
                </div>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'web development',
        image: 'src/assets/no1.jpg',
        title: 'مقاطع بدون معالجة سطحية (غير مؤكسدة)',
        title_english: 'Mill Finish Profiles',
        description: 'مقاطع ألمنيوم بدون أي معالجة سطحية أو تلوين، وتستخدم للأغراض الصناعية',
        description_english: 'Aluminum profiles without any surface treatment or coloring, used for industrial purposes',
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: 'Mobile App',
        image: 'src/assets/Data.jpg',
        title: 'مقاطع مؤكسدة كهربائيا (مؤنودة)',
        title_english: 'Anodized Profiles',
        description: 'تنتج بإخضاع المقاطع لعملية كهربائية كيميائية. الغرض منها هو تكوين طبقة من أكسيد الألمنيوم على المقاطع لحمايتها من التآكل بفعل العوامل الجوية، فضلاً على المظهر الجمالي الذي تضفيه هذه الطبقة على المقاطع. ينتج عن الأنوَّدة ألوان متعددة منها الأسود والفضي والذهبي والشامبين والبرونزي بدرجاته المختلفة.',
        description_english:'Produced by subjecting sections to an electrochemical process. Its purpose is to form a layer of aluminum oxide on the sections to protect them from corrosion due to weather factors, as well as the aesthetic appearance that this layer gives to the sections. Anodizing produces multiple colors, including black, silver, gold, champagne, and bronze in various shades.',
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        category: 'web development',
        image: 'src/assets/w7.jpg',
        title_english: 'Powder Coated Profiles',
        title: 'مقاطع مطلية بالمسحوق (البودرة)',
        description: 'تعالج مقاطع الألمنيوم كيميائياً لتجهيز الأسطح لاستقبال الطلاء، ثم ترش بمسحوق الطلاء الحراري ويتم شيّها. تعد المعالجة الكيميائية مهمة جداً كي تحقق للمسحوق الالتصاق الجيد على مقاطع الألمنيوم. تتميز المقاطع المطلية بالمسحوق بوقاية جيدة من العوامل الجوية، وتحقيقها متطلبات مهندسي العمارة والديكور.',
        description_english:'Aluminum sections are chemically treated to prepare the surfaces to receive paint, then sprinkled with thermal powder coating and grilled. Chemical treatment is very important to ensure good adhesion of the powder to the aluminum profiles. Powder coated sections offer good weather protection and meet the requirements of architects and decorators.',
        gitURL: '',
        webURL: ''
    },
    {
        id: 4,
        category: 'Mobile App',
        image: 'src/assets/1686624707170.jpg',
        title: 'مقاطع ذات المظهر الخشبي',
        title_english: 'Profiles with Wood Effect appearance',
        description: 'تتم تغشية المقاطع بعد طليها بالبودرة بأغشية ذات ألوان متعددة تبعاً لرغبة الزبون، ومن ثم تخضع لعملية يتم معالجتها في أفران خاصة للسماح بنقل الحبر من الفيلم إلى سطح القطاعات.تضيف هذه المعالجة لقطاعات الألمنيوم تأثيرًا خشبيًا زخرفيًا جذابًا مطابق تماماً لأفخر أنواع الخشب بالعالم. وتتميز هذه المقاطع بأنها لا تحتاج إلى صيانة، هذا بالإضافة الى قابلية إعادة تصنيعها مرة أخرى.يمكن تزيين أي مقطع ألمنيوم بالمظهر الخشبي، سواء كان المقطع بسيطاً أم معقداً.',
        description_english:"After coating them with powder, the sections are covered with films of multiple colors according to the customer’s desire, and then they undergo a process in which they are processed in special ovens to allow the ink to be transferred from the film to the surface of the sections. This treatment adds to the aluminum profiles an attractive decorative wood effect that perfectly matches the world's finest wood. These sections are characterized by the fact that they do not require maintenance, in addition to the ability to be remanufactured again.Any aluminum profile can be decorated with a wood look, Whether the passage is simple or complex.",
        gitURL: '',
        webURL: ''
    },
    {
        id: 5,
        category: 'web development',
        image: 'src/assets/polished_ala.jpeg',
        title: 'مقاطع ذات التلميع الكيميائي',
        title_english: ' Chemically Polished Profiles',
        description: 'لدى شركتنا تجهيزات متطورة لإنتاج مقاطع ملمعة كيميائياً، مما يكسبها بريقاً مميزاً وجمالاً فريداً من نوعه.',
        description_english:'Our company has advanced equipment to produce chemically polished sections, which gives them a distinctive luster and unique beauty.',
        gitURL: '',
        webURL: ''
    },
    {
        id: 6,
        category: 'web development',
        image: 'src/assets/aluminum-foil-1.jpg',
        title: 'فويل المنيوم صاج المنيوم',
        title_english: 'Aluminium foil paper',
        description: 'لدى شركتنا تجهيزات متطورة لإنتاج مقاطع ملمعة كيميائياً، مما يكسبها بريقاً مميزاً وجمالاً فريداً من نوعه.',
        description_english:'Aluminum Foil Paper 37.5 SQ.FT.',
        gitURL: '',
        webURL: ''
    },
]);

const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})

const checkLang = (lang) =>{
    if(lang == localStorage.getItem('lang')){
        
        return true;
    }
}

</script>

