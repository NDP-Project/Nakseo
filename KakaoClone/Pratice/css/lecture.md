# CSS
## CSS와 HTML을 연결하는 방법
`<link href="styles.css" rel="stylesheet">`을 HTML파일에 적용시키면 됨.

---
## CSS는 Property파트와 Selector파트로 나뉘어져 있다.
> Property Part - 형식 : Property-name : value <br>
>   **주의 : 무조건 소문자, 중간에 공백 없음, value 마지막에 세미콜론을 꼭 써야함. 안쓰면 오류남.**

>  Selector Part - 형식 : Selector(id, class, tag-name) {Property-name : value;} <br>
> **괄호를 열고 그 안에 수많은 property를 넣을 수 있음.**
---
## CSS의 elements들은 모두 박스이다.
>.css{
    background-color : red; <br>
    width : 50%; <br>
    height : 50px; <br>
    margin : 20px 10px 5px 2px <br>
    border-width : 5px; <br>
    border-color : yellow; <br>
    border-style : dashed; <br>
}

  margin > border > padding > content
  
  ![box](./image/box.png)

 - Margin / Border / Padding
> 1. 공백값을 상하좌우 모두 50px 주고싶으면 그냥 padding(Border,Margin 이하동문):50px; 라고 적으면됨.
> 2. 상-하는 20px, 좌-우는 10px 주고싶으면 padding:20px 10px; 라고 씀. padding이후 첫번째 숫자는 상-하를, 두번째 숫자는 좌-우를 뜻함.
> 3. 상-우-하-좌 시계방향 순서대로 적용할 수도 있음. padding:20px 10px 5px 2px;

---
 
## Display
> display : block;

박스는 block이나 inline block 둘 중 하나가 되어야 함. default = block

block - element가 크기와 상관없이 그 옆에 다른 element가 위치하는것을 허용하지 않는 것. = 무엇이든 그 밑으로 위치하게 됨. 폭, 높이값이 존재함.

inline block - 박스들이 서로서로 바로 옆에 위치할 수 있음. 폭, 높이값이 존재하면서 서로서로 붙을 수 있음.

inline - 인라인으로 설정하면 더이상 블록이 아님. just 텍스트. 텍스트는 높이도 폭도 없음. 컨텐츠의 길이만 존재함. 

**인라인과 같은 설정값을 원하면서 동시에 박스 형태를 유지하고 싶다면 inline block을 쓰는것.**

---
## Position
  - Static : 그 element를 그 자리에 두면 항상 거기에 존재한다. <br>
모든 박스의 default position 값이다.

  - Fixed : 화면에 오버랩되어 고정되어 있어서 스크롤을 올리든, 내리든 그 자리를 유지한다.

  - Absolute : fixed와 비슷하지만 스크롤한다고 보이지는 않는다. <br>
  position이 absolute로 설정되면 html상에서 해당 element와 관계가 있는 relative element를 살펴보고 이에 상응해서 자리가 결정된다.

  - Relative : 부모박스. 단독으로 쓰는데에 의미가 없음.


**Static은 default값  <br>
Fixed는 고정, 어디든 오버랩되어서 계속 해당 위치에 고정시키기 위한 것. <br>
Absolute는 Relative에 상대적으로 포지션을 잡는것. relative 포지션이 없을경우, absolute는 문서의 본문 body에 맞춰서 위치를 잡음. <br>
그러므로 Absoulte 포지션을 부모 element에 상대적으로 사용하려면 부모 element에게 relative포지션을 먼저 부여해줘야함.**





## Flex

### order
 ` order: 정수; `

### justify-content
이 속성은 다음의 값들을 인자로 받아 요소들을 **가로선 상에서 정렬**합니다:

flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.
flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
center: 요소들을 컨테이너의 가운데로 정렬합니다.
space-between: 요소들 사이에 동일한 간격을 둡니다.
space-around: 요소들 주위에 동일한 간격을 둡니다.

예를 들어, justify-content: flex-end;는 개구리를 오른쪽으로 이동시킵니다.
---
### align-items
이 CSS 속성은 다음의 값들을 인자로 받아 요소들을 **세로선 상에서 정렬**합니다:

flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
stretch: 요소들을 컨테이너에 맞도록 늘립니다.

align-self는 개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 align-items가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.
---
### flex-direction
이 CSS 속성은 다음의 값들을 인자로 받아 **컨테이너 안에서 요소들이 정렬해야 할 방향을 지정**합니다:

row: 요소들을 텍스트의 방향과 동일하게 정렬합니다. **(가로)**
row-reverse: 요소들을 텍스트의 반대 방향으로 정렬합니다.
column: 요소들을 위에서 아래로 정렬합니다. **(세로)**
column-reverse: 요소들을 아래에서 위로 정렬합니다.

column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀝니다.
Flex의 방향이 column일 경우 justify-content의 방향이 세로로, align-items의 뱡향이 가로로 바뀝니다.
---
### flex-wrap

nowrap: 모든 요소들을 한 줄에 정렬합니다.
wrap: 요소들을 여러 줄에 걸쳐 정렬합니다.
wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.

>flex-direction과 flex-wrap이 자주 같이 사용되기 때문에, flex-flow가 이를 대신할 수 있습니다. 이 속성은 공백문자를 이용하여 두 속성의 값들을 인자로 받습니다.
>
>예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해 flex-flow: row wrap을 사용할 수 있습니다.
> ** flex-flow: <flex-direction> <flex-wrap>


### align-content

여러 줄 사이의 간격을 지정할 수 있습니다. 이 속성은 다음의 값들을 인자로 받습니다:

flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
space-between: 여러 줄들 사이에 동일한 간격을 둡니다.
space-around: 여러 줄들 주위에 동일한 간격을 둡니다.
stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.

이 속성을 사용하는 방법이 어려울 수 있습니다. align-content는 여러 줄들 사이의 간격을 지정하며, align-items는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, align-content는 효과를 보이지 않습니다.