async function loadMarkdownContent(sectionId, filePath) {
  const response = await fetch(filePath);
  const markdown = await response.text();
  const htmlContent = marked.parse(markdown);

  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  tempDiv.querySelectorAll('code').forEach((block) => {
    block.classList.add('language-python'); 
  });

  
  document.getElementById(sectionId).innerHTML = tempDiv.innerHTML;

  
  Prism.highlightAll();
}


document.addEventListener('DOMContentLoaded', () => {
    // Загружаем Markdown-контент и ждем завершения всех процессов
    Promise.all([
      loadMarkdownContent('markdown-section1', 'section1.md'),
      loadMarkdownContent('markdown-section2', 'section2.md'),
      loadMarkdownContent('markdown-section3', 'section3.md'),
      loadMarkdownContent('markdown-section4', 'section4.md'),
      loadMarkdownContent('markdown-section5', 'section5.md'),
    ]).then(() => {
      // Добавляем обработчики клика для копирования после полной загрузки
      document.querySelectorAll('.language-python').forEach(block => {
        block.addEventListener('click', async () => {
          const codeText = block.innerText;
          try {
            await navigator.clipboard.writeText(codeText);
            console.log('Код скопирован в буфер обмена');
          } catch (error) {
            console.error('Ошибка копирования текста: ', error);
          }
        });
      });
    });
  });
  
