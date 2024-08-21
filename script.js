document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function() {
        // Находим текст внутри элемента <code>
        const codeBlock = this.previousElementSibling;
        const codeText = codeBlock.innerText;

        // Копируем текст в буфер обмена
        navigator.clipboard.writeText(codeText).then(() => {
            // Меняем текст кнопки на "Copied!" временно
            this.innerHTML = 'Copied!';
            setTimeout(() => {
                this.innerHTML = '&#128203;'; // Возвращаем оригинальную иконку
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
