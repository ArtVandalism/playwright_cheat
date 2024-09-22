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

