---
"Expect"
---

---

    async def select_option(page: Page, selector: str, label: str):
        await page.select_option(selector, label=label)  
        # Выбор опции в раскрывающемся списке по метке.

---

    async def wait_for_element(page: Page, selector: str, state: str):
        await page.wait_for_selector(selector, state=state)  
        # Ожидание появления или видимости элемента.

---

    async def check_element_visibility(page: Page, selector: str):
        assert await page.locator(selector).is_visible()  
        # Проверка, существует ли элемент и виден ли он.

---

    async def check_page_title(page: Page, expected_title: str):
        assert await page.title() == expected_title  
        # Проверка заголовка страницы.
---