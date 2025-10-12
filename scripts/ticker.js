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