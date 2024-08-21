function copyCode(text, tooltip) {
    navigator.clipboard.writeText(text).then(() => {
        tooltip.classList.add('tooltip-visible');
        setTimeout(() => {
            tooltip.classList.remove('tooltip-visible');
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем событие, чтобы не вызвать обработчик на <code>
        const codeBlock = this.previousElementSibling.querySelector('code');
        const codeText = codeBlock.innerText;
        const tooltip = this.nextElementSibling;
        copyCode(codeText, tooltip);
    });
});

document.querySelectorAll('.code-container').forEach(container => {
    container.addEventListener('click', function() {
        const codeBlock = this.querySelector('code');
        const codeText = codeBlock.innerText;
        const tooltip = this.querySelector('.tooltip');
        copyCode(codeText, tooltip);
    });
});
