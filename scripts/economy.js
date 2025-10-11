// ================================================
// ================Data Section====================
// ================================================
const economicHeadlines = [
    {
        id: 2,
        title: 'أسعار الذهب تصل لمستويات قياسية جديدة',
        description: 'المعدن الأصفر يواصل مكاسبه القوية وسط توترات جيوسياسية عالمية',
        image: 'https://images.unsplash.com/photo-1642744901889-9efbec703430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFycyUyMHdlYWx0aHxlbnwxfHx8fDE3NjAyMDM3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'أسواق',
        content: 'سجلت أسعار الذهب العالمية مستويات قياسية جديدة، متجاوزة حاجز 2100 دولار للأوقية، مدفوعة بالطلب المتزايد كملاذ آمن...',
    },
    {
        id: 1,
        title: 'البورصة المصرية تسجل أعلى إغلاق في تاريخها',
        description: 'مؤشر EGX30 يتجاوز حاجز الـ30 ألف نقطة بدعم من تدفقات أجنبية ضخمة',
        image: 'https://images.unsplash.com/photo-1666467831470-8f26f983391f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmd8ZW58MXx8fHwxNzYwMTA0Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'عاجل',
        content: 'حققت البورصة المصرية إنجازاً تاريخياً جديداً بتسجيل أعلى إغلاق في تاريخها، حيث تجاوز مؤشر EGX30 حاجز الـ30 ألف نقطة للمرة الأولى...',
    },
    {
        id: 3,
        title: 'الاحتياطي النقدي يرتفع لـ46 مليار دولار',
        description: 'زيادة قياسية في الاحتياطيات الأجنبية تعكس قوة الاقتصاد المصري',
        image: 'https://images.unsplash.com/photo-1607623198457-7aad066a4ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyZW5jeSUyMG1vbmV5JTIwZXhjaGFuZ2V8ZW58MXx8fHwxNzYwMTIyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'اقتصاد كلي',
        content: 'أعلن البنك المركزي المصري عن ارتفاع صافي الاحتياطيات الدولية من النقد الأجنبي إلى 46 مليار دولار، في إشارة إيجابية...',
    },
    {
        id: 4,
        title: 'البنك المركزي يثبت أسعار الفائدة',
        description: 'لجنة السياسة النقدية تقرر الإبقاء على المعدلات الحالية',
        image: 'https://images.unsplash.com/photo-1705588852021-033b238d8617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jaWFsfGVufDF8fHx8MTc2MDIwMzcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'بنوك',
        content: 'قررت لجنة السياسة النقدية بالبنك المركزي المصري الإبقاء على أسعار الفائدة دون تغيير للاجتماع الثالث على التوالي...',
    },
    {
        id: 5,
        title: 'استثمارات أجنبية بـ15 مليار دولار خلال 2025',
        description: 'تدفقات قياسية للاستثمارات الأجنبية المباشرة في مختلف القطاعات',
        image: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjAwOTExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'استثمار',
        content: 'شهدت مصر تدفقات استثمارية أجنبية مباشرة بقيمة 15 مليار دولار خلال العام الجاري، في مؤشر على جاذبية الاقتصاد المصري...',
    },
];

// Global Economy News
const globalEconomyNews = [
    {
        id: 101,
        title: 'الاقتصاد العالمي ينمو بنسبة 3.2% في 2025',
        image: 'https://images.unsplash.com/photo-1579846703547-7190c9b1b460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBlY29ub215JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYwMjAzNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        content: 'توقع صندوق النقد الدولي نمو الاقتصاد العالمي بنسبة 3.2% خلال العام الحالي، مدفوعاً بالتعافي القوي للاقتصادات الناشئة...',
    },
    {
        id: 102,
        title: 'دول الخليج تحقق فوائض ضخمة من ارتفاع النفط',
        image: 'https://images.unsplash.com/photo-1666467831470-8f26f983391f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmd8ZW58MXx8fHwxNzYwMTA0Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        content: 'استفادت دول مجلس التعاون الخليجي من ارتفاع أسعار النفط لتسجل فوائض مالية تاريخية تتجاوز 200 مليار دولار...',
    },
    {
        id: 103,
        title: 'الاتحاد الأوروبي يخفض توقعات النمو',
        image: 'https://images.unsplash.com/photo-1705588852021-033b238d8617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jaWFsfGVufDF8fHx8MTc2MDIwMzcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
        content: 'خفضت المفوضية الأوروبية توقعاتها للنمو الاقتصادي في منطقة اليورو بسبب التحديات الطاقية والتضخم المرتفع...',
    },
    {
        id: 104,
        title: 'الصين تعلن عن حزمة تحفيز اقتصادي جديدة',
        image: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjAwOTExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        content: 'أعلنت الحكومة الصينية عن حزمة تحفيز اقتصادي بقيمة 500 مليار يوان لدعم النمو وتعزيز الاستهلاك المحلي...',
    },
    {
        id: 105,
        title: 'التجارة العالمية تتعافى بقوة في الربع الأول',
        image: 'https://images.unsplash.com/photo-1579846703547-7190c9b1b460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBlY29ub215JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYwMjAzNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        content: 'شهدت التجارة العالمية انتعاشاً ملحوظاً في الربع الأول من العام، مع زيادة حجم الصادرات والواردات بنسبة 8%...',
    },
    {
        id: 106,
        title: 'أسعار السلع الغذائية ترتفع عالمياً',
        image: 'https://images.unsplash.com/photo-1607623198457-7aad066a4ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyZW5jeSUyMG1vbmV5JTIwZXhjaGFuZ2V8ZW58MXx8fHwxNzYwMTIyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        content: 'ارتفعت أسعار السلع الغذائية العالمية بنسبة 12% على أساس سنوي، مدفوعة بالطلب القوي ونقص المعروض...',
    },
];

// Egyptian Stock Exchange News
const egxNews = [
    {
        id: 201,
        title: 'البنك التجاري الدولي يحقق أرباحاً قياسية',
        description: 'صافي الأرباح يرتفع 45% في الربع الأول',
        image: 'https://images.unsplash.com/photo-1705588852021-033b238d8617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jaWFsfGVufDF8fHx8MTc2MDIwMzcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
        change: 5.2,
        content: 'أعلن البنك التجاري الدولي عن ارتفاع صافي الأرباح بنسبة 45% لتصل إلى 8.2 مليار جنيه...',
    },
    {
        id: 202,
        title: 'المصرية للاتصالات تعلن عن توزيعات أرباح',
        description: 'مجلس الإدارة يوافق على توزيع 2.5 جنيه للسهم',
        image: 'https://images.unsplash.com/photo-1666467831470-8f26f983391f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmd8ZW58MXx8fHwxNzYwMTA0Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        change: 3.8,
        content: 'وافق مجلس إدارة المصرية للاتصالات على توزيع أرباح نقدية بقيمة 2.5 جنيه للسهم الواحد...',
    },
    {
        id: 203,
        title: 'أوراسكوم للإنشاء توقع عقوداً بـ3 مليار دولار',
        description: 'مشروعات جديدة في الشرق الأوسط وأفريقيا',
        image: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjAwOTExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        change: 7.1,
        content: 'نجحت شركة أوراسكوم للإنشاء في الحصول على عقود جديدة بقيمة 3 مليار دولار في عدة دول...',
    },
];

// US Stock Markets News
const usMarketsNews = [
    {
        id: 301,
        title: 'ناسداك يسجل ارتفاعاً قياسياً',
        description: 'أسهم التكنولوجيا تقود المكاسب القوية',
        image: 'https://images.unsplash.com/photo-1666467831470-8f26f983391f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmd8ZW58MXx8fHwxNzYwMTA0Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        change: 2.4,
        content: 'أغلق مؤشر ناسداك على ارتفاع قياسي جديد مدفوعاً بمكاسب قوية لأسهم شركات التكنولوجيا الكبرى...',
    },
    {
        id: 302,
        title: 'أبل تعلن عن نتائج مالية مبهرة',
        description: 'الإيرادات تتجاوز التوقعات بفضل مبيعات آيفون',
        image: 'https://images.unsplash.com/photo-1579846703547-7190c9b1b460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBlY29ub215JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYwMjAzNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        change: 4.5,
        content: 'حققت شركة أبل إيرادات قياسية في الربع المالي الأخير، متجاوزة توقعات المحللين بفضل المبيعات القوية...',
    },
    {
        id: 303,
        title: 'تسلا تعلن عن خطة توسع عالمية',
        description: 'افتتاح مصانع جديدة في آسيا وأوروبا',
        image: 'https://images.unsplash.com/photo-1705588852021-033b238d8617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jaWFsfGVufDF8fHx8MTc2MDIwMzcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
        change: 6.2,
        content: 'كشفت شركة تسلا عن خططها لافتتاح مصانع جديدة للسيارات الكهربائية في عدة دول آسيوية وأوروبية...',
    },
];

// Gold price data for the last 3 months
const goldPriceData = [
    { month: 'أكتوبر', value: 1920 },
    { month: 'نوفمبر', value: 1985 },
    { month: 'ديسمبر', value: 2045 },
    { month: 'يناير', value: 2130 },
];

// USD to EGP exchange rate data for the last 3 months
const usdExchangeData = [
    { month: 'أكتوبر', value: 30.85 },
    { month: 'نوفمبر', value: 30.92 },
    { month: 'ديسمبر', value: 30.88 },
    { month: 'يناير', value: 30.95 },
];

// ================================================
// ================Slider Section==================
// ================================================

let currentSlide = 0;
const dots = document.querySelectorAll('.dot')
const slider = document.querySelector('.slider');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');


economicHeadlines.forEach((element, i) => {
    let slide = document.createElement('div');
    slide.classList.add('slide')
    if (i === 0) slide.classList.add('active');
    slide.style.backgroundImage = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.9)
    ),
    url(${element.image})`;
    // ================================
    slide.innerHTML = `<div class="content">
      <span class="category">${element.category}</span>
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <button class="readmore">اقرأ المزيد</button>
    </div>`

    slider.appendChild(slide)
    dots[currentSlide].classList.add('active')
});

const nxt = document.getElementById('nxt')
const pre = document.getElementById('pre')
const changeDir = (dir) => {
    const slides = document.querySelectorAll('.slide');

    let len = slides.length
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active')

    currentSlide = (currentSlide + len + dir) % len;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active')

}
nxt.onclick = () => changeDir(1)
pre.onclick = () => changeDir(-1)

setInterval(() => {
    changeDir(1)
}, 2000)
// ================================================
// ================modal Section===================
// ================================================

document.querySelectorAll('.readmore').forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'flex';
        modalImg.src = economicHeadlines[currentSlide].image;
        modalTitle.textContent = economicHeadlines[currentSlide].title;
        modalText.textContent = economicHeadlines[currentSlide].content;
    };
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';

    }
};





