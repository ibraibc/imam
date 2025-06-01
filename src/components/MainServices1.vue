<template >
    <section class="flex items-center justify-center mt-10" id="services" data-aos="zoom-in-up">
        <div class="">
            <h2 class="text-4xl font-bold text-white px-4 xl:pl-16 "> Our Services</h2>
            <ul v-for="service in services" :key="service.id" class="mt-10">
                <div >
            <div class="flex items-center justify-center mt-5 ">
                <img :src="service.image" alt="" class="w-2/3  border-[15px] border-black rounded-lg ">     
            </div>
            <div class="flex items-center justify-center border-b border-black">
                <div class="text-xl w-4/5 my-10 rounded-lg">
                    <p v-if="checkLang('english')" class="text-center font-serif"> 
                    {{ service.title_english }}  
                    <br>
                    {{ service.description_english }}  
                    </p>
                    <p v-if="checkLang('arabic')" dir="rtl" class="text-center font-serif"> 
                    {{ service.title }}
                    <br>
                    {{ service.description }}  
                    </p>
                </div>
            </div>
                </div>
            </ul>
        </div>
    </section>
</template>
<script setup>



import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        category: 'web development',
        color_primary:  '#ff52ca',
        color_secondary:  '#00ffca',
        image: 'src/assets/w20.jpg',
        title:'مقاطع نوافذ من الألومنيوم المبثوق المؤكسد عالي الجودة:',
        title_english: 'High-Quality Anodized Extruded Aluminium Window Profiles:',
        description: `
        غالبًا ما ترتبط نوافذ الألمنيوم بالأعمال التجارية والهياكل التجارية.
        تستفيد نوافذ الألومنيوم لمنزلك من فوائد النوافذ التجارية وتوفر طول العمر والموثوقية التي لن تراها مع النوافذ المصنوعة من الفينيل أو الخشب.
        إنها خفيفة الوزن وقابلة لإعادة التدوير ومقاومة للتآكل. نحن نلتزم بدقة بشهادة ISO 9001 لمساعدتك على خفض تكاليفك مع الحصول على جودة عالية.
        يتواجد فريقنا في الموقع لمراقبة المخرجات وتقديم خدمة رائعة والتسليم في الوقت المحدد.
        `,
        description_english: "Aluminum windows are often associated with businesses and commercial structures. Aluminum windows for your home take the benefits of commercial windows and offer longevity and reliability you won’t see with vinyl or wooden windows.They are lightweight, recyclable, and corrosion-resistant.We strictly according to ISO 9001 certificate to help you lower your costs while getting high quality. Our team is on-site to monitor output providing great service and on-time delivery.",
    },
    {
        id: 2,
        category: 'web development',
        color_primary:  '#ff52ca',
        color_secondary:  '#00ffca',
        image: 'src/assets/w22.png',
        title: 'مواد الألومنيوم من الدرجة الأولى:',
        title_english: 'A Grade Aluminum Materials',
        description: " يمكن استخدام سبائك الألومنيوم هذه للمنتجات التي تتعرض لمستوى عالٍ من التآكل والتلف، مثل المزاريب أو الأثاث ذي الزوايا المكشوفة كما أن القوة المتزايدة تجعلها الخيار الأفضل للاستخدام في المواقف التي توجد فيها مستويات عالية من الرطوبة لأنها تتمتع بمقاومة أفضل للتآكل مقارنة بالدرجات الأخرى.",
        description_english: "This aluminum alloy can be used for products that experience a high level of wear and tear, such as guttering or furniture with exposed corners. The increased strength also makes it the best option to use in situations where there are high levels of humidity because it has an improved corrosion resistance over other grades.",
    },
    {
        id: 3,
        category: 'web development',
        color_primary:  '#ff52ca',
        color_secondary:  '#00ffca',
        image: 'src/assets/w24.png',
        title: 'التكنولوجيا المتقدمة:',
        title_english: 'Advanced  Technology: ',
        description: `
        لدينا خطوط إنتاج متطورة مؤتمتة بالكامل، وخطوط طلاء المسحوق وخطوط إنتاج مؤكسدة.
        يمكنك هنا دائمًا العثور على المعالجة السطحية المناسبة التي تريدها.
        كما تتوافق عملية الإنتاج لدينا مع معيار ISO9001 والحصول على Qualicoat بالفعل.`,

        description_english: `
        We have advanced fully automated production lines, powder coating line and anodized production lines.
        Here, you can always find the right surface treatment you want.
        Also Our production process conforms to the ISO9001 standard and get the Qualicoat already.`,
    },
    {
        id: 4,
        category: 'web development',
        color_primary:  '#ff52ca',
        color_secondary:  '#00ffca',
        image: 'src/assets/w2.png',
        title: 'معالجة سطحية متعددة:',
        title_english: 'Multiple Surface Treatment:',
        description: `
        تتمتع جميع مقاطع الألمنيوم المبثوقة بمعالجة سطحية أو تشطيب حسب طلبك. لدينا الكثير من الخيارات للطحن، والأكسدة، والطلاء بالمسحوق، وحبيبات الخشب، والرحلان الكهربائي، والتلميع وما إلى ذلك.
        أكثر معالجات السطح شيوعًا هي الأكسدة والطلاء بالمسحوق، والمعالجات السطحية الصحيحة للطلاء بالمسحوق البرونزي/الفحم/الأبيض/الأسود والفضي الطبيعي غير اللامع المؤكسد.`,

        description_english: `
        All the aluminium extrusion profiles has a surface treatment or finish as you request. We have a lot of options for mill, anodized, powder coating, wood grain, electrophoresis, polishing and so on.
        The most popular surface treatment are anodizing and powder coating, correct surface treatments of powder coating bronze/charcoal/white/black and anodized natural matt silver.`,
    },
    {
        id: 5,
        category: 'web development',
        color_primary:  '#ff52ca',
        color_secondary:  '#00ffca',
        image: 'src/assets/w23.png',
        title: 'مراقبة الجودة:',
        title_english: 'Quality Control',
        description: `
        التأكد من أن جميع المواد المسلمة مطابقة لأوامر الشراء (يتم تقديمها إلى مراقبة الجودة من قبل المبيعات عند طلب المواد)، ويتم إجراء عد فعلي فعلي.
        يتم أيضًا التحقق من تكوينات الملف الشخصي مقابل رسومات القالب المعتمدة. يتم تدوين أوصاف المواد العامة في هذه المرحلة. يتم إخطار الموردين بأي نقص `,
        description_english: `
        Ensures all delivered materials are as per purchased orders (furnished to QC by Sales upon ordering of materials), an actual physical count is conducted.
        Profile configurations are also checked against approved die drawings. General material descriptions are noted in this stage. Suppliers are advised of any shortfalls.`,
    },
    {
        id: 6,
        category: 'web development',
        color_primary:  '#ff52ca',
        color_secondary:  '#00ffca',
        image: 'src/assets/w25.png',
        title: 'التعبئة والتغليف:',
        title_english: 'Packaging:',
        description: `تتمتع شركة بردي بخبرة غنية في مجال التعبئة والتغليف لمقاطع الألومنيوم لحماية السطح وتجنب التلف أثناء النقل.`,
        description_english: `
        Bardi have the rich experience for the packaging for the aluminum profiles to protect the surface and to avoid the damage in the transportation`
    },
]);

const checkLang = (lang) =>{
    if(lang == localStorage.getItem('lang')){
        
        return true;
    }
}
</script>
<style >.swiper-slide {
    overflow: hidden;
}</style>