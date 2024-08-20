document.addEventListener('DOMContentLoaded', function() {
    const codes = document.querySelectorAll('pre code');
    const tooltip = document.getElementById('tooltip');

    codes.forEach(code => {
        code.addEventListener('click', function(event) {
            const text = event.target.textContent;
            navigator.clipboard.writeText(text).then(() => {
                tooltip.textContent = 'Copied!';
                tooltip.style.left = `${event.pageX}px`;
                tooltip.style.top = `${event.pageY + 20}px`;
                tooltip.style.display = 'block';

                setTimeout(() => {
                    tooltip.style.display = 'none';
                }, 1000);
            }).catch(err => {
                tooltip.textContent = 'Failed to copy!';
                tooltip.style.left = `${event.pageX}px`;
                tooltip.style.top = `${event.pageY + 20}px`;
                tooltip.style.display = 'block';

                setTimeout(() => {
                    tooltip.style.display = 'none';
                }, 1000);
            });
        });
    });
});
