# KAKAO CLONE

상단 전체와 하단 전체는 여러번 쓸것임.(화면이 바뀌어도 고정되어 있음)
/ 컴포넌트 단위로 시작하거나 **반복되는 페이지의 파트**로 만들기 시작함.(헤더,스테이츠 바,네비게이션 바)

div는 파일을 붙일때나, 어떤 코드를 감쌀때 등 아무때나 사용 가능하지만, span은 오로지 텍스트를 위해서만 쓰인다.

`html:5` 라는 코드를 탭 또는 엔터친다면 html의 기본 형식이 불러와짐. 개꿀?

`.class-name` 을 치면 `<div class=class-name></div>`라는 코드가 자동으로 로드됨. 개꿀?

`.status-bar*2`를 치면 `<div class="status-bar"></div>` 라는 코드가 2개 로드됨.

`span.status-bar__clock`을 치면 `<span class=status-bar__clock></span>`가 로드됨.

`li.nav__list-item*4>a.nav__list-link` 를 치면 `<ni class="nav__list-item"><a href="" class="nav__list-link"></a></ni>`가 로드됨.

`<main>`이라는 태그는 이 부분부터 이 페이지의 메인이다 라는것을 지정함.

chats가 아닌 chat을 쓰는 이유는 여러가지 내용들을 적어야 할 때 chats이하 ~~, chats이하 ~~ 라고 적기엔 너무 내용이 많아져서 그냥 새로운 chat이라는 부모태그를 만들어버린 것.

폴더나 파일명은 항상 소문자여야한다! 매우 중요!!! 

한 페이지에 header는 여러개 들어가도 아무런 문제가 없다.

username.github.io/a name of the project < publishing 한 내 프로젝트를 볼수있는 방법.

**gh-pages 라는 branch를 만들어야한다**.