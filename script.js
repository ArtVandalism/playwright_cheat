document.querySelectorAll('code').forEach((element) => {
    element.addEventListener('click', () => {
        const text = element.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    });
});
