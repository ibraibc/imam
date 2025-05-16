<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <div class="flex-1 ">
            <img src="@/assets/logo.png" alt="Bardi-Iraq Alaminium " class="rounded-lg w-32 p-1 ">
        </div>
        <!-- Mobile toggle button -->
        <div class="md:hidden z-30">
        <button type="button" 
        class="block focus:outiline-none"
        @click="isMenuOpen = !isMenuOpen"
        >
            <span v-if="isMenuOpen" class="text-5xl">
                <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
            </span>
            <span v-else class="text-5xl">
                <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50">
            </span>
        </button>
        </div>
        <!-- Navbar link-->
        <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row ',
        isMenuOpen? 'block':'hidden'
    ]"
        >
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li 
                class="block text-[#b7b3a4] border-1 border-b border-solid border-white  transition hover:text-[#fff] ease-linear text-2xl md:text-lg cursor-pointer"
                @click="changeLang('arabic')"
                >
                ar</li>
                
                <li class="block text-[#b7b3a4] border-1 border-b border-solid border-white  transition hover:text-[#fff] ease-linear text-2xl md:text-lg cursor-pointer"
                @click="changeLang('english')"
                >en</li>
                <li v-for="item in menu" :key="item.name">
                    <a :href="item.href"
                        class="block text-[#b7b3a4] border-1 border-b border-solid border-white transition hover:text-[#fff] ease-linear text-2xl md:text-lg"
                        @click="scrollToSection(item.href)">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const menu = ref([
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'other services', href: '#other_services' },
    { name: 'Contact', href: '#contact' },
    
]);

const isMenuOpen = ref(false)
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const changeLang = (lang)=> {
    localStorage.setItem('lang',lang);
    console.log(localStorage.getItem('lang'));
    window.location.reload();
};

</script>

