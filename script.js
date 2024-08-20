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
   ​⬤
