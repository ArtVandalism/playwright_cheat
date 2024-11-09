
```python
	# Ввести текст
	page.type('input', 'Как же дохуя насыпит')
```

```python
	# Нажать клавишу на клавиатуре.
	page.keyboard.press('Enter') 
```

```python
	# Отпустить клавишу на клавиатуре.
	page.keyboard.release('Shift') 
```


```python
	# Передвинуть мышь в указанную позицию и кликнуть.
	page.mouse.move(100, 100)
	page.mouse.click()
```


