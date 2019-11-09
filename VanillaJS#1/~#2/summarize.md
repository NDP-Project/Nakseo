# Vanilla JS 1
JS파일은 항상 Body 밑에 있어야 한다. (맨 마지막에 있어야한다??)

## 1.Variable(변수) : 변경되거나 변경될 수 있는것.

* JS에서는 모든 항목들이 각각 다른 라인에 존재해야한다. ( 한 라인을 끝낸다 라는 뜻 세미콜론 ; )

* 변수선언 순서 : 생성 -> 초기화 -> 사용 (생성과 초기화 같이 가능) 

	* 생성 : let / const / var a (a라는 변수 생성)
	* 초기화 : a = 1
	* 사용 : b = a + 1

* 코드는 위에서부터 아래로 차례로 실행된다. (논리적임)

* const (constant, 상수=안정적, 변하지않는 함수 선언) - let 과 var를 통해 함수를 선언하면 함수가 변할 수 있음.

> ex)   

> 	let a = 221;  
>  	let b = a - 5;  
>  	a = 4  
>  	console.log(b,a)           >>> 결과로 216,4 가 출력되지만,  
> ---
>  const a = 221;  
>  let b = a - 5;  
>  a = 4  
>  console.log(b,a)               >>> 결과는 에러가 뜬다. const로 선언된 a라는 변수는 변할 수 없는데 변하게 만들려고 했기 때문이다.


* 주석처리를 하고싶을때는 한줄짜리 주석일 땐 // 를 사용하며, 여러줄을 통한 주석처리를 하고싶을땐, /* 를 적고 마침으로 */를 쓰면 된다.

* 변수선언은 무조건 const로 쓰고, 정말 필요할때만 let 또는 var을 써라.

* string 은 텍스트를 의미함.
"string" 	이라고 " " 사이에 입력해야 출력을 할 때 string이라고 제대로 텍스트가 출력됨. 그냥 string이라고만 적으면 JS가 문서 내에서 string이라는 변수를 찾게되고, 당연히 그러한 함수는 없으므로 오류가 생성되는것.

* Boolean = True or False (true와 false는 텍스트가 아님.)

* Number = 숫자 (" " 사이에 넣지 않아도 그냥 그대로 출력됨.)

* Float = 소숫점 아래 숫자가 있는 숫자


- - - -
## 데이터를 정리하는법 2가지
1. Array = 여러 데이터(String)를 리스트처럼 하나로 묶고 저장하는 것
변수를 선언하고 초기화 할 때 [ ] 사이에 String, 숫자, True, False, Float 등을 넣으면 됨.

2. Object = 각각 value를 부여할 수 있음.
변수를 선언하고 초기화 할 때 { } 사이에 값을 넣으면 됨.
& JS의 특성을 이용해서 그 값을 바꿀 수 있음.

> ex)  
> const seonhoinfo = {  
> 		name : "nakseo",  
> 		age : 21,  
> 		gender : "male"  
> }  

> seonhoinfo.name = "nakseo"  

> console.log(seonhoinfo.age);   
> console.log(seonhoinfo.name);  
> >>> 21  
> 	nakseo  

 
+ Array와 Object를 같이 사용하는 방법도 존재.
> ex)   
> const seonhoinfo = {  
> 		name : "선호"  
> 		age : 21  
> 		gender : "male"  
> 		favMovies : ["500일의 썸머",  
> 						"엑시트",  
> 						"신과함께"]                          <<< Object안에 Array를 넣음.  
> 		favFood : [{name : "kimchi",   
> 					fatty : false},   
> 				{name : "chicken",   
> 					fatty ; true}]                        <<< array속에 object를 넣음.  
> }  




* 변수를 선언할 때에는 Camel(낙타) Case라는 규칙에 따르는데,
변수의 첫글자는 무조건 소문자이고, JS 에서는 변수에 공백(스페이스바)를 넣을 수 없으니 스페이스바를 치는 대신 대문자로 표현함. 
ex) days of week -> daysOfWeek


- - - -
# Function 함수
how to create function

> function sayHello(){  
> 	console.log("Hello!");  
> }  


함수 function() 에서 ( ) 괄호 안에 들어가는 값을 Argument or Parameter(인자) 라고 부른다.
인자는 변수와 같은 것.

이 Argument를 이용해 함수를 쓴 예시

> function sayHello(name){  
> 	console.log("Hello!", name)  
> }  
>   
> sayHello("SeonHo");               < 입력시  
>   
> Hello! SeonHo                     < 라고 출력됨.   

함수 인자와 나중에 함수를 쓸 때 들어가는 인자와의 관계는 아무런 관련이 없음.

> ex)   
> function who(age,gender){  
> 	console.log("SeonHo is ", age, " and ", gender)  
> }  
>   
> who("male", 21)                      < 입력  
>   
> SeonHo is male and 21               < 출력(age라고 입력한곳에 male이 왔고 gender라고 입력한곳에 21이 와도 아무런 문제가 없음.)


위와같이 age와 gender가 각각 값을 가르키는것이 잘못되었지만 출력에는 아무런 문제가 없다.
단, 함수를 **선언할 때 Argument를 잘 작성한다면 나중에 함수를 사용할 때 조금 더 직관적으로 편하고 빠르게** 값을 넣을 수 있다.

- - - -
console.log("SeonHo is ", age, " and ", gender) 라고 

" " 과 ' ' 을 이용해서 적을 시, 사이사이에 공백을 넣어줘야하고 보기에도 매우 지저분해지므로 ` ` (영문 타자로 ₩키, 백틱 이라고 부른다.) 를 사용하여 깔끔하게 정리한다. (양끝에 백틱을 넣었을 때 공백은 그냥 적용된다.)

-> console.log(`SeonHo is ${age} and ${gender}`) 라고 적는다.


어떠한 변수(let/const/var)를 쓸 때 특정한 값을 반환하려고 한다면 return을 써야함.


> ex)  
> function sayHello(name,age){  
>   return(`Hello ${name} you are a ${age} years old`);  
> }  
>   
> const greetNicolas = sayHello("Nicolas", 14)
>   
> console.log(greetNicolas)  
>   
>   
> -> 출력 : Hello Nicolas you are a 14 years old
<<<< 변수를 선언해서 쓰는 이유는 Hello Nicolas you are a 14 years old 라는 출력값을 중복해서 써야 할 경우 나중에 관리(값을 바꿈)할 때 맨 위에서 const greetNicolas = sayHello("name",age) 값만 바꾸면 모든 값이 바뀌므로 관리르 쉽게 하기 위하여 변수를 선언함. 

> const calculator = {  
> 	plus: function(a,b ){  
> 		return a + b;  
> 	}  
> }  
>   
> const plus = calculator.plus(5, 5)  
> console.log(plus)  
>   
> -> 출력 : 10  


- - - -
DOM = Document Object Module

console 이라는 명령어 목록? 에서 . 을 쓰면 그 목록에서 . 뒤에있는 명령어를 끄집어 내서 사용한다는 의미임.  = 배열

JS는 이벤트에 반응하기위해 만들어졌음.

- - - -
> function handResize(){  
> 	console.log("I have been resized");  
> }  
>   
> window.addEvenetListener("resize", handResize);  

-> 여기에서 window. ~~~ , handResize()); 라고 적었다면 함수가 바로 실행됨.
but 지금은 handResize); 라고 적었으므로 내가 필요할 때 호출됨.(바로 즉시 호출되지않음.) 중요!

- - - -
if(조건){
	block
} else {
	block
}



조건에 && 가 들어간다면 && 앞 뒤 조건 모두 참이어야 참의 값으로 출력되고 아니라면 거짓의 값이 출력됨.

true && true = true
true && false  = false
false && true = false
false && false = false


- - - -
> const age = promt("How old are you")  
>   
> if (age > 18){  
> 	console.log("You can drink")  
> } else {  
> 	console.log("you can't")  
> }  
- - - -
> const age = promt("How old are you")  
>   
> if (age >= 18 && age <= 21) {  
> 	console.log("You can drink but you should not")  
> } else if(age > 21) {  
> 	console.log("go ahead")  
> } else {  
> 	console.log("too young")  
> }  
- - - -
- - - -
- - - -
> const title = document.querySelector("#title");  
>   
> const BASE_COLOR = "#34495e";  
> const OTHER_COLOR = "#7f9c8d";  
>   
> function handleClick() {  
> 	const currentColor  = title.style.color;  
> 	if (currentColor === BASE_COLOR){  
> 		title.style.color = OTHER_COLOR;  
> 	} else {  
> 		title.style.color = BASE_COLOR;  
> 	}  
> }  
>   
> function init() {  
> 	title.style.color = BASE_COLOR;  
> 	title.addEventListener("click", handleClick);  
> }  
>   
> init();  
- - - -
> const title = document.querySelector("#title");  
>   
> const CLICKED_CLASS = "clicked";  
>   
> function handleClick() {  
>     const currentClass = title.className;  
>     if(currentClass !== CLICKED_CLASS){  
>        title.className = CLICKED_CLASS;  
>    } else {  
>        title.className = "";  
>    }  
> }  
>   
> function init() {  
>    title.addEventListener("click", handleClick);  
> }  
> init();  

-> 함수 변경

> const title = document.querySelector("#title");  
>   
> const CLICKED_CLASS = "clicked";  
>   
> function handleClick() {  
>     const hasClass = title.classList.contains(CLICKED_CLASS);  
>   
>     if (!hasClass){  
>         title.classList.add(CLICKED_CLASS);  
>     } else {  
>         title.classList.remove(CLICKED_CLASS);  
>     }  
> }  
>   
> function init() {  
>     title.addEventListener("click", handleClick);  
> }  
> init();  


-> toggle 함수 추가


> const title = document.querySelector("#title");  
>   
> const CLICKED_CLASS = "clicked";  
>   
> function handleClick() {  
>     title.classList.toggle(CLICKED_CLASS);  
> }  
>   
> function init() {  
>     title.addEventListener("click", handleClick);  
> }  
> init();  