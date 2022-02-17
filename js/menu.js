// бургер меню

const menuBtn = document.querySelector('.mobile-btn');
const menuBody = document.querySelector('.header__nav');

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock');
})

// плавная прокрутка

document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
            menuBody.classList.remove('active');
            document.body.classList.remove('lock');
        }

        const hreff = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(hreff);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})