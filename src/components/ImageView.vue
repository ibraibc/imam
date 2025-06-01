<template>
  <div>
    <div class="justify-center mx-20 mt-14">
      <div>
        <span class=" font-serif">
          <h1 class="text-4xl font-bold text-white mb-4">Our Work</h1>
        </span>
      </div>
      <ul class="pt-8 flex gap-6 max-sm:grid-col-1 max-sm:grid">
        <li
          class=" border-2 border-[#b7b3a4] border-solid p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 ">
          <img class=" rounded-lg " src="@/assets/kit1.jpg" alt="image" @click="show = true, index = 0" />
        </li>
        <li
          class=" border-2 border-[#b7b3a4] border-solid p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 ">
          <img class=" rounded-lg " src="@/assets/kit2.jpg" alt="image" @click="show = true; index = 1;" />
        </li>
        <li
          class=" border-2 border-[#b7b3a4] border-solid p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 ">
          <img class=" rounded-lg " src="@/assets/kit3.jpg" alt="image" @click="show = true; index = 2;" />
        </li>

        <VueEasyLightbox :visible="show" :imgs="images" :index="index" @hide="show = false" />

      </ul>
      <div class="flex justify-center pt-10">
        <button
          class="bg-[#b7b3a4] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          @click = "goToGalarry"
          >
          view more
        </button>
      </div>
    </div>

  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import router from '../router'

var show = ref(false);
const index = ref(0);


const images = ref([
  'src/assets/kit1.jpg',
  'src/assets/kit2.jpg',
  'src/assets/kit3.jpg',
])
function goToGalarry() {
      router.push('/galary')
    }

</script>