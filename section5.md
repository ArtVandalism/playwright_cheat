
```python
	# Выполнить JavaScript-код в контексте страницы.
	result = page.evaluate('1 + 2')
```

```python
	# Получить фрейм по имени.
	page.frame(name='frameName')  
```

```python
	# Получить фрейм по индексу.
	page.frame(index=0) 
```

```python
	# Выполнить JavaScript-код в контексте фрейма.
	frame = page.frame(index=0)
	frame.evaluate('console.log("Hello from frame!")')
```