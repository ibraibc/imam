<template>
    <section class="text-white mt-10 font-serif" id="products">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> Our Products</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['all','office', 'resturant', 'home']"
                        :key="category" @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                    :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }"
                    @click="move(project.image)"
                    >          
                            
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
                <div v-if="checkLang('english')" dir='ltr' class="text-white rounded-b-xl mt-3 bg-gradient-to-tr from-[#827474] to-[#422117] shadow-lg border border-[#823e42] py-6 px-4">
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
import router from '../router'
const Projects = ref([
    {
        id: 1,
        category: 'home',
        image: 'src/assets/kit7.jpg',
        title: 'مطبخ منزلي',
        title_english: 'home kitchen',
        description: 'مطبخ منزلي',
        description_english: 'home kitchen',
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: 'office',
        image: 'src/assets/kit8.jpg',
        title: 'مطبخ مكتبي',
        title_english: 'office kitchen',
        description: 'مطبخ مكتبي',
        description_english:'office kitchen',
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        category: 'home',
        image: 'src/assets/kit9.jpg',
        title_english: 'home kitchen',
        title: 'مطبخ منزلي',
        description: 'مطبخ منزلي',
        description_english:'home kitchen',
        gitURL: '',
        webURL: ''
    },
    {
        id: 4,
        category: 'resturant',
        image: 'src/assets/kit10.jpg',
        title: 'مطبخ مطعم',
        title_english: 'resturant kitchen',
        description: 'مطبخ مطعم',
        description_english:"resturant kitchen",
        gitURL: '',
        webURL: ''
    },
    {
        id: 5,
        category: 'office',
        image: 'src/assets/kit11.jpg',
        title: 'مطبخ مكتبي',
        title_english: 'office kitchen',
        description: 'مطبخ مكتبي',
        description_english:'office kitchen',
        gitURL: '',
        webURL: ''
    },
    {
        id: 6,
        category: 'resturant',
        image: 'src/assets/kit12.jpg',
        title: 'مطبخ مطعم',
        title_english: 'resturant kitchen',
        description: 'مطبخ مطعم',
        description_english:'resturant kitchen',
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
const move = (url) => {
    localStorage.setItem('imageId',url);
    router.push('/work');
};

</script>

