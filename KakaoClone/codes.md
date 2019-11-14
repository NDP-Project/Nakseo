# KAKAO CLONE Codes
---
# CSS
## chat.css
    .header-wrapper {
      position: fixed;
      z-index: 2;
      top: 0px;
      width: 100%;
      padding: 5px 0px;
      background-color: white;
      box-shadow: 0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }

    .chats-body {
      padding: 10px 0px;
      padding-top: 100px;
    }

    .chats-body .header,
    .chats-body .status-bar {
      padding: 0px 20px;
    }

    .chats-body {
      background-image: url("../images/chatBg.png");
      min-height: 1000vh;
    }

    .chat__write--container {
      position: fixed;
      bottom: 0px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .chat__icon-left {
      position: absolute;
      left: 10px;
    }

    .chat__icon-right {
      position: absolute;
      right: 10px;
    }

    @keyframes float {
      0% {
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      }
      50% {
        box-shadow: 0 30px 60px -60px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      }
      100% {
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      }
    }

    .chat__write {
      margin: 0 auto;
      bottom: 0px;
      width: 100%;
      border-radius: 0;
      padding: 20px 60px;
      width: 100%;
      border: none;
      font-size: 14px;
      transition: width 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
        border-radius 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .chat__write:focus {
      outline: none;
      width: 80%;
      transform: translateY(-100px);
      border-radius: 40px;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      animation: float 3s linear infinite forwards;
    }

    .chat__icon {
      font-size: 18px;
      transition: opacity 0.3s ease-in-out;
    }

    .chat__write:focus ~ .chat__icon {
      opacity: 0;
    }

    .chat__write i {
      font-size: 22px;
    }

    .chat__write-column:nth-child(2) {
      width: 80%;
    }

    .chat-screen .chat__messages {
      border-top: 1px solid #f7f7f7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0px 20px;
      padding-top: 30px;
    }

    .chat__messages .chat__timestamp {
      background-color: white;
      font-size: 12px;
      padding: 5px 10px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
        rgba(0, 0, 0, 0.024) 0px -6px 16px -6px;
      text-transform: uppercase;
      font-weight: 700;
    }

    .message {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
    }

    .incoming-message {
      align-self: flex-start;
    }

    .sent-message {
      align-self: flex-end;
    }

    @keyframes spin {
      from {
        transform: none;
      }
      to {
        transform: rotateY(1turn);
      }
    }

    .incoming-message img {
      width: 30px;
      border-radius: 15px;
      margin-right: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
        rgba(0, 0, 0, 0.024) 0px -6px 16px -6px;
      animation: spin 1s linear infinite;
    }

    .message .message__bubble {
      background-color: white;
      display: block;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
        rgba(0, 0, 0, 0.024) 0px -6px 16px -6px;
      padding: 10px 20px;
      border-radius: 20px;
      color: white;
      font-weight: 600;
    }

    .incoming-message .message__author {
      margin-top: 10px;
      display: block;
      font-weight: 600;
      font-size: 12px;
    }

    .incoming-message .message__bubble {
      border-bottom-left-radius: 0px;
      background-image: linear-gradient(to right, #7b4397, #dc2430);
    }

    .sent-message .message__bubble {
      border-bottom-right-radius: 0px;
      background-image: linear-gradient(to left, #00c6ff, #0072ff);
    }

    @keyframes incomingAnim {
      from {
        opacity: 0;
        transform: translateX(-200px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    .incoming-message {
      animation: incomingAnim 0.5s ease-out forwards;
    }

    @keyframes sentAnimation {
      from {
        opacity: 0;
        transform: translateX(200px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    .sent-message {
      animation: sentAnimation 0.5s ease-out forwards;
    }

---
## find.css

    .find .find__header-list {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      padding: 0px 10px;
    }
    
    .find .header-btn__title {
      display: block;
      margin-top: 10px;
      font-size: 14px;
    }
    
    .find .header-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .find .header-btn__icon {
      font-size: 12px;
    }
    
    .find .find__recommended {
      margin-top: 20px;
      padding-top: 15px;
      border-top: 1px solid #f7f7f7;
    }
    
    .find .find__title {
      font-size: 12px;
      opacity: 0.7;
      margin-bottom: 20px;
    }
    
---

## friend.css
    
    .friend {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .friend .friend__avatar {
      width: 50px;
      border-radius: 38%;
      margin-right: 15px;
    }
    
    .friend__avatar.g-avatar {
      width: 70px;
    }
    
    .friend__avatar.m-avatar {
      width: 60px;
    }
    
    .friend .friend__column {
      display: flex;
      align-items: center;
    }
    
    .friend__content .friend__name {
      display: block;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    .friend__content .friend__status,
    .friend__content .friend__bottom-text,
    .friend .chat__timestamp {
      opacity: 0.6;
    }
    
    .friend__content .friend__bottom-text {
      font-size: 14px;
    }
    
    .friend__content .friend__status,
    .friend .chat__timestamp {
      font-size: 12px;
    }
    
    .friend__add-btn {
      display: flex;
      padding: 10px 13px;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    
---

## friends.css
    
    .friends .friends__plus {
      margin: 20px 0px;
      padding: 20px 0px;
      border-top: 1px solid #f7f7f7;
      border-bottom: 1px solid #f7f7f7;
    }
    
    .friends__plus .friends__title,
    .friends__list .friends__title {
      font-size: 14px;
      opacity: 0.6;
      margin-bottom: 10px;
    }
    
    .friend .friend__now-listening {
      border: 2px solid #52e084;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 14px;
    }
    
    .friend__now-listening span {
      opacity: 0.6;
    }
    
---

## header.css
    
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      align-items: center;
    }
    
    .header .header__title {
      font-size: 24px;
      font-weight: 600;
    }
    
    .header .header__icon {
      font-size: 20px;
      margin-left: 20px;
      cursor: pointer;
    }
    
    .header .header__header-column {
      display: flex;
      align-items: center;
    }
    
    .header .header__back-btn {
      font-size: 22px;
      margin-right: 20px;
    }
    
---

## mobile.css
    
    .bigScreen {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #fce006;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: white;
      font-size: 28px;
      text-align: center;
      line-height: 1.5;
      padding: 0px 20px;
      display: none;
      z-index: 4;
    }
    
    @media screen and (min-width: 550px) {
      .bigScreen {
        display: flex;
      }
    }
    
---

## more.css
    
    .more .more__btn-list {
      margin: 30px 0px;
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    
    .more__btn-list .more__btn,
    .more .suggestion {
      margin-right: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
    
    .more__btn .more__btn-title {
      font-size: 14px;
      margin-top: 15px;
    }
    
    .more .more__suggestions {
      border-top: 1px solid #f7f7f7;
      padding-top: 22px;
    }
    
    .more .more__title {
      opacity: 0.8;
      margin-bottom: 20px;
    }
    
    .suggestion .suggestion__title {
      font-size: 12px;
      margin-top: 15px;
    }
    
    .suggestion .suggestion__icon {
      background-color: #fce006;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }
    
    .more .more__suggestions-list {
      align-items: center;
      margin: 30px 0px;
      display: flex;
      margin-left: 10px;
    }
    
    .suggestion__icon i {
      font-size: 28px;
      color: white;
    }
    
---

## nav-bar.css
    
    .nav {
      position: fixed;
      width: 100%;
      background-color: #fcfcfc;
      padding: 20px 50px;
      left: 0px;
      bottom: 0px;
      border-top: 1px solid #f7f7f7;
    }
    
    .nav .nav__list {
      display: flex;
      justify-content: space-between;
    }
    
    .nav i {
      font-size: 20px;
    }
    
    .nav .nav__list-link {
      position: relative;
    }
    
    .nav .nav__badge {
      position: absolute;
      top: -7px;
      right: -7px;
      font-size: 10px;
      color: white;
      background-color: #dc5d46;
      width: 18px;
      height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    
    @keyframes showNavBar {
      from {
        transform: translateY(80px);
      }
      to {
        transform: none;
      }
    }
    
    .nav {
      transform: translateY(80px);
      animation: showNavBar 0.5s ease-out forwards;
      animation-delay: 0.5s;
    }
    
---

## settings.css
    
    .settings .settings__sections {
      border-top: 1px solid #f7f7f7;
      padding: 30px 0px;
    }
    
    .settings__setting .settings__icon {
      font-size: 20px;
      margin-right: 20px;
    }
    
    .settings__setting .settings__title {
      font-size: 30px;
      font-weight: 300;
    }
    
    .settings .settings__setting {
      margin-bottom: 30px;
    }
    
    ..settings .settings__setting:last-child {
      margin-bottom: 0px;
    }
    
    
---

## status-bar.css
    
    .status-bar {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      opacity: 0.7;
    }
    
    .status-bar i {
      font-size: 14px;
    }
    
    .status-bar .status-bar__battery-level {
      margin-left: 7px;
    }
    
---

## styles.css
    
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300:400,600");
    @import "reset.css";
    @import "status-bar.css";
    @import "header.css";
    @import "nav-bar.css";
    @import "friend.css";
    @import "friends.css";
    @import "find.css";
    @import "more.css";
    @import "settings.css";
    @import "chat.css";
    @import "mobile.css";
    
    * {
      box-sizing: border-box;
    }
    
    body {
      background-color: white;
      padding: 10px 20px;
      color: #020202;
      font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }
    
    main {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    
---

---

---

# HTML
## index.html
    <title>Chats | Kakao Clone</title>
      </head>
      <body>
        <div class="status-bar">
          <div class="status-bar__column">
            <span class="status-bar__clock">13:54 </span>
          </div>
          <div class="status-bar__column">
            <i class="fas fa-clock"></i>
            <i class="fas fa-volume-mute"></i>
            <i class="fas fa-wifi"></i>
            <span class="status-bar__battery-level">100%</span>
            <i class="fas fa-battery-full"></i>
          </div>
        </div>
        <header class="header">
          <div class="header__header-column">
            <h1 class="header__title">Chats</h1>
          </div>
          <div class="header__header-column">
            <span class="header__icon">
              <i class="fas fa-search"></i>
            </span>
            <span class="header__icon">
              <i class="far fa-comment"></i>
            </span>
            <span class="header__icon">
              <i class="fas fa-cog"></i>
            </span>
          </div>
        </header>
        <main class="chats">
          <ul class="chats__list">
            <li class="chats__chat chat">
              <a href="chat.html">
                <div class="chats__chat friend friend--lg">
                  <div class="friend__column">
                    <img src="images/avatar.jpg" class="m-avatar friend__avatar" />
                    <div class="friend__content">
                      <span class="friend__name">
                        Lynn
                      </span>
                      <span class="friend__bottom-text">
                        Going home!
                      </span>
                    </div>
                  </div>
                  <div class="friend__column">
                    <span class="chat__timestamp">
                      March 8
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </main>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a href="friends.html" class="nav__list-link">
                <i class="far fa-user"></i
              ></a>
            </li>
            <li class="nav__list-item">
              <a href="index.html" class="nav__list-link">
                <div class="nav__badge">8</div>
                <i class="fas fa-comment"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="find.html" class="nav__list-link">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="more.html" class="nav__list-link">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </nav>
      </body>
      <div class="bigScreen">
        <span class="bigScreen__text">Please make your screen small!</span>
      </div>
    </html>
    
---

## chat.html
    <title>Chat | Kakao Clone</title>
      </head>
      <body class="chats-body">
        <div class="header-wrapper">
          <div class="status-bar">
            <div class="status-bar__column">
              <span class="status-bar__clock">13:54</span>
            </div>
            <div class="status-bar__column">
              <i class="fas fa-clock"></i>
              <i class="fas fa-volume-mute"></i>
              <i class="fas fa-wifi"></i>
              <span class="status-bar__battery-level">100%</span>
              <i class="fas fa-battery-full"></i>
            </div>
          </div>
          <header class="header">
            <div class="header__header-column">
              <a href="index.html" class="header__back-btn">
                <i class="fas fa-arrow-left"></i>
              </a>
              <h1 class="header__title">Best Friend</h1>
            </div>
            <div class="header__header-column">
              <span class="header__icon">
                <i class="fas fa-search"></i>
              </span>
              <span class="header__icon">
                <i class="fas fa-bars"></i>
              </span>
            </div>
          </header>
        </div>
        <main class="chat-screen">
          <ul class="chat__messages">
            <span class="chat__timestamp">Friday, January 11, 2019</span>
            <li class="incoming-message message">
              <img src="images/avatar.jpg" class="m-avatar message__avatar" />
              <div class="message__content">
                <span class="message__bubble">
                  Congrats I love you!
                </span>
                <span class="message__author">Best Friend</span>
              </div>
            </li>
            <li class="sent-message message">
              <div class="message__content">
                <span class="message__bubble">
                  Thank you see you soon!
                </span>
              </div>
            </li>
            <li class="incoming-message message">
              <img src="images/avatar.jpg" class="m-avatar message__avatar" />
              <div class="message__content">
                <span class="message__bubble">
                  Congrats I love you!
                </span>
                <span class="message__author">Best Friend</span>
              </div>
            </li>
            <li class="sent-message message">
              <div class="message__content">
                <span class="message__bubble">
                  Thank you see you soon!
                </span>
              </div>
            </li>
          </ul>
        </main>
        <div class="chat__write--container">
          <input
            type="text"
            class="chat__write"
            placeholder="Send message"
            class="chat__write-input"
          />
          <div class="chat__icon-left chat__icon">
            <i class="far fa-plus-square"></i>
          </div>
          <div class="chat__icon-right chat__icon">
            <span class="chat__write-icon">
              <i class="far fa-smile-wink"></i>
            </span>
            <span class="chat__write-icon">
              <i class="fas fa-microphone"></i>
            </span>
          </div>
        </div>
      </body>
      <div class="bigScreen">
        <span class="bigScreen__text">Please make your screen small!</span>
      </div>
    </html>
    
---

## find.html
    <title>Find | Kakao Clone</title>
      </head>
      <body>
        <div class="status-bar">
          <div class="status-bar__column">
            <span class="status-bar__clock">13:54 </span>
          </div>
          <div class="status-bar__column">
            <i class="fas fa-clock"></i>
            <i class="fas fa-volume-mute"></i>
            <i class="fas fa-wifi"></i>
            <span class="status-bar__battery-level">100%</span>
            <i class="fas fa-battery-full"></i>
          </div>
        </div>
        <header class="header">
          <div class="header__header-column">
            <h1 class="header__title">Find</h1>
          </div>
          <div class="header__header-column">
            <span class="header__icon">
              <i class="fas fa-search"></i>
            </span>
            <span class="header__icon">
              <i class="fas fa-cog"></i>
            </span>
          </div>
        </header>
        <main class="find">
          <header class="find__header">
            <ul class="find__header-list">
              <li class="find__header-btn header-btn">
                <span class="header-btn__icon">
                  <i class="fas fa-qrcode fa-2x"></i>
                </span>
                <span class="header-btn__title">
                  QR Code
                </span>
              </li>
              <li class="find__header-btn header-btn">
                <span class="header-btn__icon">
                  <i class="fas fa-user-plus fa-2x"></i>
                </span>
                <span class="header-btn__title">
                  Add by Contacts
                </span>
              </li>
              <li class="find__header-btn header-btn">
                <span class="header-btn__icon">
                  <i class="fas fa-passport fa-2x"></i>
                </span>
                <span class="header-btn__title">
                  Add by ID
                </span>
              </li>
              <li class="find__header-btn header-btn">
                <span class="header-btn__icon">
                  <i class="far fa-envelope fa-2x"></i>
                </span>
                <span class="header-btn__title">
                  Invite
                </span>
              </li>
            </ul>
          </header>
          <ul class="find__recommended">
            <h5 class="find__title">
              Recommended Friends
            </h5>
            <li class="find__friend friend friend--lg">
              <div class="friend__column">
                <img src="images/avatar.jpg" class="friend__avatar" />
                <div class="friend__content">
                  <span class="friend__name">
                    Nicolás Serrano
                  </span>
                </div>
              </div>
              <div class="friend__column">
                <div class="friend__add-btn">
                  <i class="fas fa-user-plus"></i>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a href="friends.html" class="nav__list-link">
                <i class="far fa-user"></i
              ></a>
            </li>
            <li class="nav__list-item">
              <a href="index.html" class="nav__list-link">
                <i class="far fa-comment"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="find.html" class="nav__list-link">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="more.html" class="nav__list-link">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </nav>
      </body>
      <div class="bigScreen">
        <span class="bigScreen__text">Please make your screen small!</span>
      </div>
    </html>
    
---

## friends.html
    <title>Friends | Kakao Clone</title>
      </head>
      <body>
        <div class="status-bar">
          <div class="status-bar__column">
            <span class="status-bar__clock">13:54 </span>
          </div>
          <div class="status-bar__column">
            <i class="fas fa-clock"></i>
            <i class="fas fa-volume-mute"></i>
            <i class="fas fa-wifi"></i>
            <span class="status-bar__battery-level">100%</span>
            <i class="fas fa-battery-full"></i>
          </div>
        </div>
        <header class="header">
          <div class="header__header-column">
            <h1 class="header__title">Friends</h1>
          </div>
          <div class="header__header-column">
            <span class="header__icon">
              <i class="fas fa-search"></i>
            </span>
            <span class="header__icon">
              <i class="fas fa-cog"></i>
            </span>
          </div>
        </header>
        <main class="friends">
          <header class="friends__header">
            <div class="friends__friend friend">
              <div class="friend__column">
                <img src="images/avatar.jpg" class="g-avatar friend__avatar" />
                <div class="friend__content">
                  <span class="friend__name">
                    Nicolás Serrano
                  </span>
                  <span class="friend__status">
                    nomadcoders.co
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div class="friends__plus">
            <h5 class="friends__title">Plus friend</h5>
            <div class="friends__friend friend">
              <div class="friend__column">
                <img src="images/avatar.jpg" class="friend__avatar" />
                <div class="friend__content">
                  <span class="friend__name">
                    Plus Friend
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul class="friends__list">
            <h5 class="friends__title">Friends 14</h5>
            <li class="friends__friend friend friend--lg">
              <div class="friend__column">
                <img src="images/avatar.jpg" class="friend__avatar" />
                <div class="friend__content">
                  <span class="friend__name">
                    Nicolás Serrano
                  </span>
                  <span class="friend__status">
                    nomadcoders.co
                  </span>
                </div>
              </div>
              <div class="friend__column">
                <div class="friend__now-listening">
                  <span>
                    FTISLAND (FT NomadCoders)
                    <i class="fas fa-play"></i>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a href="friends.html" class="nav__list-link">
                <i class="fas fa-user"></i
              ></a>
            </li>
            <li class="nav__list-item">
              <a href="index.html" class="nav__list-link">
                <i class="far fa-comment"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="find.html" class="nav__list-link">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="more.html" class="nav__list-link">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </nav>
      </body>
      <div class="bigScreen">
        <span class="bigScreen__text">Please make your screen small!</span>
      </div>
    </html>
    
    
---

## more.html
    <title>More | Kakao Clone</title>
      </head>
      <body>
        <div class="status-bar">
          <div class="status-bar__column">
            <span class="status-bar__clock">13:54 </span>
          </div>
          <div class="status-bar__column">
            <i class="fas fa-clock"></i>
            <i class="fas fa-volume-mute"></i>
            <i class="fas fa-wifi"></i>
            <span class="status-bar__battery-level">100%</span>
            <i class="fas fa-battery-full"></i>
          </div>
        </div>
        <header class="header">
          <div class="header__header-column">
            <h1 class="header__title">More</h1>
          </div>
          <div class="header__header-column">
            <span class="header__icon">
              <i class="fas fa-search"></i>
            </span>
            <span class="header__icon">
              <i class="fas fa-qrcode"></i>
            </span>
            <span class="header__icon">
              <a href="settings.html">
                <i class="fas fa-cog"></i>
              </a>
            </span>
          </div>
        </header>
        <main class="more">
          <header class="more__header">
            <div class="friends__friend friend friend--lg">
              <div class="friend__column">
                <img src="images/avatar.jpg" class="g-avatar friend__avatar" />
                <div class="friend__content">
                  <span class="friend__name">
                    Nicolás Serrano
                  </span>
                  <span class="friend__status">
                    itnicolasme@gmail.com
                  </span>
                </div>
              </div>
              <div class="friend__column">
                <i class="far fa-comment-alt fa-2x"></i>
              </div>
            </div>
            <ul class="more__btn-list">
              <li class="more__btn">
                <span class="more__btn-icon">
                  <i class="far fa-smile fa-2x"></i>
                </span>
                <span class="more__btn-title">
                  Emoticons
                </span>
              </li>
              <li class="more__btn">
                <span class="more__btn-icon">
                  <i class="fas fa-brush fa-2x"></i>
                </span>
                <span class="more__btn-title">
                  Themes
                </span>
              </li>
              <li class="more__btn">
                <span class="more__btn-icon">
                  <i class="fab fa-kickstarter-k fa-2x"></i>
                </span>
                <span class="more__btn-title">
                  Account
                </span>
              </li>
            </ul>
          </header>
          <section class="more__suggestions">
            <h5 class="more__title">Suggestions</h5>
            <ul class="more__suggestions-list">
              <li class="more__suggestion suggestion">
                <span class="suggestion__icon">
                  <i class="fas fa-quote-right"></i>
                </span>
                <span class="suggestion__title">Kakao Story</span>
              </li>
              <li class="more__suggestion suggestion">
                <span class="suggestion__icon">
                  <i class="fas fa-beer "></i>
                </span>
                <span class="suggestion__title">Kakao friend</span>
              </li>
              <li class="more__suggestion suggestion">
                <span class="suggestion__icon">
                  <i class="fas fa-gamepad"></i>
                </span>
                <span class="suggestion__title">Friends Gem</span>
              </li>
            </ul>
          </section>
        </main>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a href="friends.html" class="nav__list-link">
                <i class="far fa-user"></i
              ></a>
            </li>
            <li class="nav__list-item">
              <a href="index.html" class="nav__list-link">
                <i class="far fa-comment"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="find.html" class="nav__list-link">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li class="nav__list-item">
              <a href="more.html" class="nav__list-link">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </nav>
      </body>
      <div class="bigScreen">
        <span class="bigScreen__text">Please make your screen small!</span>
      </div>
    </html>
    
---

## settings.html
    <title>Settings | Kakao Clone</title>
      </head>
      <body>
        <div class="status-bar">
          <div class="status-bar__column">
            <span class="status-bar__clock">13:54</span>
          </div>
          <div class="status-bar__column">
            <i class="fas fa-clock"></i>
            <i class="fas fa-volume-mute"></i>
            <i class="fas fa-wifi"></i>
            <span class="status-bar__battery-level">100%</span>
            <i class="fas fa-battery-full"></i>
          </div>
        </div>
        <header class="header">
          <div class="header__header-column">
            <a href="more.html" class="header__back-btn">
              <i class="fas fa-arrow-left"></i>
            </a>
            <h1 class="header__title">Settings</h1>
          </div>
          <div class="header__header-column">
            <span class="header__icon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </header>
        <main class="settings">
          <section class="settings__sections">
            <ul class="settings__list">
              <li class="settings__setting">
                <span class="settings__icon"><i class="fas fa-lock"></i> </span>
                <span class="settings__title">Privacy</span>
              </li>
              <li class="settings__setting">
                <span class="settings__icon">
                  <i class="far fa-bell"></i>
                </span>
                <span class="settings__title">Notifications</span>
              </li>
              <li class="settings__setting">
                <span class="settings__icon">
                  <i class="far fa-user"></i>
                </span>
                <span class="settings__title">Friends</span>
              </li>
            </ul>
          </section>
        </main>
      </body>
      <div class="bigScreen">
        <span class="bigScreen__text">Please make your screen small!</span>
      </div>
    </html>