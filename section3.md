
```python
	# Выбор опции в раскрывающемся списке
	page.select_option('select', label='Option 1')
```

```python
	# Ожидание появления или видимости элементов
	page.wait_for_selector('div#my-element', state='visible')
```

```python
	# Проверка, существует ли элемент
	assert page.locator("button").is_visible()
```

```python
	# Проверка заголовка страницы
	assert page.title() == "Expected Title"
```