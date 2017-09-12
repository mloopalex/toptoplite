# toptoplite
jQuery plugin наверх страницы

# Использование
```html
<p class="j-toptop">
    <a href="#"><span></span></a>
</p>
```
# Подключение через requirejs
как можно ближе к ```</body>```

```html
(function ($toptop) {
        if (!$toptop.length) {
            return;
        }
        require(['toptop'], function () {
            $toptop.toptop();
        });
    })($('.j-toptop'));
```
    