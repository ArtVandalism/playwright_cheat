---
Navigation
---

---

    async def navigate_to_url(page: Page, url: str):
        await page.goto(url)  
        # Переход по указанному URL.

---

    async def reload_page(page: Page):
        await page.reload()  
        # Перезагрузка текущей страницы.

---

    async def go_back(page: Page):
        await page.go_back()  
     # Переход на предыдущую страницу в истории.

---

    async def go_forward(page: Page):
        await page.go_forward()  
        # Переход на следующую страницу в истории.

---



 
    

         