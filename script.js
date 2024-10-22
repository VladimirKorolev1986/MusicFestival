// Главная страница
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (event) => {
    const x = event.clientX - hero.offsetLeft;
    const y = event.clientY - hero.offsetTop;

    const parallaxIntensity = 0.5; // Интенсивность параллакса

    hero.style.backgroundPosition = `${x * parallaxIntensity}px ${y * parallaxIntensity}px`;
});

// Лайн-ап
const artists = document.querySelector('.artists');

// Создаем примерные данные о артистах
const artistsData = [
    { name: "НИК", image: "images/image1.jpeg", info: "Кантри певец" },
    { name: "Джениффер", image: "images/image2.jpeg", info: "Непревзойдённая художница" },
    { name: "Саманта", image: "images/image3.jpeg", info: "Цирковая артистка" },
];

// Динамически генерируем список артистов
artistsData.forEach(artist => {
    const artistElement = document.createElement('div');
    artistElement.classList.add('artist');
    artistElement.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <div class="info">${artist.info}</div>
    `;
    artists.appendChild(artistElement);
});

// Переход к другим страницам
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
