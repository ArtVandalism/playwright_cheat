---
"Key/mouse"
---

---

    async def type_text_in_input(page: Page, selector: str, text: str):
        await page.type(selector, text)  
        # Ввести текст в поле ввода.

---

    async def press_key_on_keyboard(page: Page, key: str):
        await page.keyboard.press(key)  
        # Нажать клавишу на клавиатуре.

---

    async def release_key_on_keyboard(page: Page, key: str):
        await page.keyboard.release(key)  
        # Отпустить клавишу на клавиатуре.

---

    async def move_mouse_and_click(page: Page, x: int, y: int):
        await page.mouse.move(x, y)
        await page.mouse.click()  
        # Передвинуть мышь в указанную позицию и кликнуть.

---
