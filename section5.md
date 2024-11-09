---
"JS/frame"
---

---
    async def evaluate_js(page: Page, js_code: str):
        return await page.evaluate(js_code)  
        # Выполнить JavaScript-код в контексте страницы.

---

    async def get_frame_by_name(page: Page, name: str):
        return await page.frame(name=name)  
        # Получить фрейм по имени.

---

    async def get_frame_by_index(page: Page, index: int):
        return await page.frame(index=index)  
        # Получить фрейм по индексу.

---

    async def evaluate_js_in_frame(frame, js_code: str):
        await frame.evaluate(js_code)  
        # Выполнить JavaScript-код в контексте фрейма.
---