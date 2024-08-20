document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.copy-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const codeElement = document.getElementById(targetId);
            const codeText = codeElement.innerText;

            navigator.clipboard.writeText(codeText).then(() => {
                // Show tooltip
                const tooltip = document.getElementById(`tooltip-${targetId}`);
                tooltip.style.display = 'block';

                // Hide tooltip after 1.5 seconds
                setTimeout(() => {
                    tooltip.style.display = 'none';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
});
