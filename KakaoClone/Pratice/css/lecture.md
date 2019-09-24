# CSS

css는 두가지 파트로 나뉘어져있음.

1. property part  -> ex) property-name: value;  무조건 소문자, 중간에 공백 없음, value 마지막에 세미콜론을 꼭 써야함. 안쓰면 오류남.

2. selector part  -> ex) selector (id, class, tag name) {
                              property-name: value;
                        }                             괄호를 열고 그 안에 수많은 property를 넣을 수 있음.

---
css와 html을 연결하는 방법

`<link href="styles.css" rel="stylesheet">`을 사용하면됨.

---
css의 elements들은 모두 박스임.
![box](./image/box.png)

---
단축키 
1. 패딩을 상하좌우 모두 50px 주고싶으면 그냥 padding:50px; 라고 적으면됨.
2. 상-하는 20px, 좌-우는 10px 주고싶으면 padding:20px 10px; 라고 씀. padding이후 첫번째 숫자는 상-하를, 두번째 숫자는 좌-우를 뜻함.
3. 상-우-하-좌 시계방향 순서대로 적용할 수도 있음. padding:20px 10px 5px 2px;