![example workflow](https://github.com/lekseff/Format_date/actions/workflows/deploy.yml/badge.svg)

[GitHub Pages](https://lekseff.github.io/Format_date/)
===
Форматирование даты публикации
===

Есть страница, содержащая список видеозаписей.
У каждого блока есть дата публикации.

![Relative Time](./assets/time.png)

В данный момент выводится просто текущее значение (Пример `2017-09-01 14:15:10`).
Было вынесено решение изменять представление даты следующим образом в зависимости от его значения:
`12 минут назад` если прошло меньше часа, `5 часов назад` если прошло больше часа, `X дней назад` если больше суток.

## Реализация

Используя HOC обернуть `DateTime` в компонент `DateTimePretty`, так, чтобы он преобразовывал дату к нужному виду.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из данного каталога в качестве отправной точки (замените ими те, что создаются в create-react-app).

Для работы с датой и временем можете воспользоваться библиотекой momentjs.
