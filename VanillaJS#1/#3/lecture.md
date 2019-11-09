# Vanilla JS #3

## `setInterval(function, millisecond)`    <- millesecond임에 주의.

ex) function sayHi(){console.log(Say Hi)}

setInterval(sayHi, 3000)  -> 3초마다 Say Hi 가 튀어나옴.
---
## `ternary operator(삼항연산자)` like small if

``hours < 10 ? `0${hours}` : hours``    <- 조건(부등호)가 들어가고 false : true가 들어감.