document.querySelectorAll('.codehilite').forEach(container => {
    container.addEventListener('click', function() {
        const codeBlock = this.querySelector('code');
        const codeText = codeBlock.innerText;

        // Копируем текст в буфер обмена
        navigator.clipboard.writeText(codeText).catch(err => {
            console.error('Failed to copy text: ', err);
        });

        // Добавляем класс для анимации
        this.classList.add('active');

        // Убираем класс через 0.3 секунды (время перехода анимации)
        setTimeout(() => {
            this.classList.remove('active');
        }, 300);
    });
});

// Получаем текущий URL
        const currentPage = window.location.pathname;

        // Находим все элементы с классом .nav-link
        document.querySelectorAll('.nav-link').forEach(link => {
            // Если ссылка совпадает с текущим URL, добавляем класс active
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });