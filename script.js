function copyCode(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем событие, чтобы не вызвать обработчик на <code>
        const codeBlock = this.previousElementSibling;
        const codeText = codeBlock.innerText;
        copyCode(codeText);
    });
});

document.querySelectorAll('.code-container').forEach(container => {
    container.addEventListener('click', function() {
        const codeBlock = this.querySelector('code');
        const codeText = codeBlock.innerText;
        copyCode(codeText);
    });
});
