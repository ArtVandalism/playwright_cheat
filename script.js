document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('code').forEach((element) => {
        element.addEventListener('click', () => {
            const text = element.textContent;
            navigator.clipboard.writeText(text).then(() => {
                showTooltip(element, 'Скопировано');
            }).catch(err => {
                console.error('Failed to copy code: ', err);
            });
        });
    });

    function showTooltip(element, message) {
        // Создаем элемент для всплывающего сообщения
        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = message;
        
        // Размещаем его рядом с элементом кода
        document.body.appendChild(tooltip);
        const rect = element.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;

        // Удаляем всплывающее сообщение через 2 секунды
        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    }
});
