document.querySelectorAll('.copy-span').forEach(span => {
    span.addEventListener('click', function() {
        // Копируем текст в буфер обмена
        const textToCopy = this.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Показываем тултип
            this.classList.add('Copy Function');

            // Убираем тултип через 1.5 секунды
            setTimeout(() => {
                this.classList.remove('Copy Function');
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy text: Function', err);
        });
    });
});
