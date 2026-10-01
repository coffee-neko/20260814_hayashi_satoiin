const newsItems = [
  { date: '2024.10.18', title: 'インフルエンザ予防接種について' },
  { date: '2024.10.04', title: '年末年始の休診について' },
  { date: '2024.09.20', title: '健康診断のご案内' },
  { date: '2024.09.10', title: '新型コロナウイルス対策について' },
  { date: '2024.08.30', title: 'オンライン診療の導入について' }
];

const newsList = document.querySelector('#newsList');
if (newsList) {
  newsList.innerHTML = newsItems.slice(0, 5).map(item => `
    <a class="news-item" href="#news">
      <time datetime="${item.date.replace(/\./g, '-')}">${item.date}</time>
      <span>${item.title}</span>
      <span class="arrow" aria-hidden="true">›</span>
    </a>`).join('');
}

const button = document.querySelector('.menu-button');
const menu = document.querySelector('#mobileMenu');
if (button && menu) {
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '×' : '☰';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '☰';
  }));
}
