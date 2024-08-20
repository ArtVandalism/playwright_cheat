document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre.code-block').forEach((block) => {
        block.addEventListener('click', (event) => {
            const element = event.target;
            if (element.tagName === 'CODE') {
                const text = element.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    showTooltip(event.pageX, event.pageY, 'Скопировано');
                }).catch(err => {
                    console.error('Failed to copy code: ', err);
                });
            }
        });
    });

    function showTooltip(x, y, message) {
        // Создаем элемент для всплывающего сообщения
        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = message;
        
        // Размещаем его рядом с кликом
        document.body.appendChild(tooltip);
        tooltip.style.top = `${y}px`;
        tooltip.style.left = `${x}px`;

        // Удаляем всплывающее сообщение через 2 секунды
        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    }
});
