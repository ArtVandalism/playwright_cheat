---
"Click"
---

---
    async def click_element(page: Page, selector: str):
        await page.click(selector)  
        # Клик по элементу, определённому селектором.

---

    async def type_text(page: Page, selector: str, text: str):
        await page.type(selector, text)  
        # Ввод текста в поле ввода.

---

    async def press_key(page: Page, selector: str, key: str):
        await page.press(selector, key)  
        # Нажатие клавиши в поле ввода.

---

    async def get_text_content(page: Page, selector: str) -> str:
        return await page.text_content(selector)  
        # Получение текстового содержимого элемента.
---
        


        