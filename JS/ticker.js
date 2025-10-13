const tickerNews = [
      'الأهلي يتأهل لنهائي دوري أبطال أفريقيا',
      'ارتفاع أسعار الذهب عالمياً',
      'الرئيس يفتتح مشروع تنموي جديد',
      'منتخب مصر يستعد لمواجهة حاسمة',
      'تطورات جديدة في الأوضاع الاقتصادية',
      'افتتاح معرض القاهرة الدولي للكتاب',
    ];

    const marqueeElement = document.getElementById('newsMarquee');

    tickerNews.forEach(newsItem => {
      const span = document.createElement('span');
      span.className = 'news';
      span.textContent = newsItem;
      marqueeElement.appendChild(span);
    });
    const economicHeadlines = [
  
    {
        id: 2,
        title: 'الذهب يسجل أعلى مستوى له في 10 سنوات',
        description: 'ارتفاع ملحوظ في أسعار المعدن النفيس وسط توترات اقتصادية عالمية',
        image: 'https://images.unsplash.com/photo-1710492341412-8b3aee7e70a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBlY29ub215fGVufDF8fHx8MTc2MDE3NDI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'اقتصاد',
        content: 'شهدت أسعار الذهب العالمية ارتفاعاً قياسياً لتصل إلى أعلى مستوياتها منذ عشر سنوات، في ظل التوترات الاقتصادية العالمية...',
    },
    {
        id: 3,
        title: 'الأهلي بطلاً لدوري أبطال أفريقيا للمرة الـ12',
        description: 'الفريق الأحمر يحقق اللقب القاري في مباراة مثيرة أمام الوداد المغربي',
        image: 'https://images.unsplash.com/photo-1634813052369-3584119ccd2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMHN0YWRpdW18ZW58MXx8fHwxNzYwMTc0Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'رياضة',
        content: 'تمكن النادي الأهلي من التتويج بلقب دوري أبطال أفريقيا للمرة الثانية عشرة في تاريخه بعد فوز مثير في المباراة النهائية...',
    },
    {
        id: 4,
        title: 'اكتشاف علمي قد يغير مستقبل الطاقة المتجددة',
        description: 'فريق بحثي مصري يتوصل لتقنية جديدة لتخزين الطاقة الشمسية بكفاءة عالية',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYwMTQ0NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'علوم وتكنولوجيا',
        content: 'نجح فريق بحثي مصري في التوصل إلى تقنية مبتكرة لتخزين الطاقة الشمسية بكفاءة تصل إلى 95% مما يفتح آفاقاً جديدة...',
    },
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
// =======================================
// عرض الأخبار السياسية في قسم "global"
// =======================================

// مصفوفة الأخبار
const politicsNews = [
  {
    id: 102,
    title: 'توقيع اتفاقيات تعاون استراتيجي مع دول أفريقية',
    image: 'https://images.unsplash.com/photo-1713948414133-c2cf74951e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjAxNzQyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'شهدت القاهرة توقيع عدة اتفاقيات تعاون في مجالات الطاقة والتجارة مع عدد من الدول الأفريقية...',
  },
  {
    id: 103,
    title: 'البرلمان يناقش قانون الحوكمة الجديد',
    image: 'https://images.unsplash.com/photo-1584573062942-d46bb3aee3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3MlMjBnbG9iYWx8ZW58MXx8fHwxNzYwMTAzNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'بدأ مجلس النواب مناقشة مشروع قانون جديد للحوكمة يستهدف تعزيز الشفافية والمساءلة...',
  },
];

// نجيب العنصر اللي هنحط فيه الكروت
const globalCardsContainer = document.querySelector('.global-cards');

// نضيف الكروت
politicsNews.forEach(news => {
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <img src="${news.image}" alt="${news.title}">
    <div class="news-card-content">
      <h3>${news.title}</h3>
      <button data-id="${news.id}">اقرأ المزيد</button>
    </div>
  `;
  globalCardsContainer.appendChild(card);
});

// ✅ لما المستخدم يضغط "اقرأ المزيد"
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.dataset.id) {
    const id = e.target.dataset.id;
    const newsItem = politicsNews.find(n => n.id == id);
    if (newsItem) {
      alert(newsItem.content); // هنا ممكن تفتحي modal بدل الـ alert
    }
  }
});