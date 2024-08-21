// Обработчик для колесика мыши
window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение прокрутки
    window.scrollBy({
        top: event.deltaY, // Прокрутка по вертикали на величину движения колесика
        behavior: 'smooth' // Плавная прокрутка
    });
});

// Переменные для обработки touch-событий
let startY;

// Обработчик начала касания
window.addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY; // Запоминаем начальную позицию касания
});

// Обработчик движения пальцем по экрану
window.addEventListener('touchmove', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение прокрутки
    const deltaY = startY - event.touches[0].clientY; // Рассчитываем изменение по вертикали
    window.scrollBy({
        top: deltaY, // Прокрутка на величину движения пальца
        behavior: 'smooth' // Плавная прокрутка
    });
    startY = event.touches[0].clientY; // Обновляем позицию для следующего движения
});
