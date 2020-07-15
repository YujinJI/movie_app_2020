# Movie App 2020

Mobile-X 2020 하계 세미나 클론 코딩 영화 평점 웹서비스

---

## 목차

- [Ch01 - 안녕 리액트?](#ch01)
- [Ch02 - 리액트로 클론 코딩 시작하기](#ch02)

---

<a id="ch01"></a>
## Ch01 - 안녕 리액트?

1. [Node.js](https://velopert.com/133)

    **Node.js**는 Java 언어가 모든 OS 운영체제에서 Virtual Machine 환경 안에서 Runtime이 구동 되듯이 Node.js는 웹브라우저에 종속적인 자바스크립트에서 외부에서 실행할 수 있는 Runtime 환경을 **Chrome V8 엔진**을 제공하여 여러 OS 환경에서 실행할 수 있는 환경을 제공한다.

    Node.js가 효율적으로 사용되는 분야
    
    - 입출력이 잦은 어플리케이션
    - 데이터 스트리밍 어플리케이션
    - 데이터를 실시간으로 다루는 어플리케이션
    - JSON API 기반 어플리케이션
    - [싱글페이지](https://ko.wikipedia.org/wiki/%EC%8B%B1%EA%B8%80_%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98) 어플리케이션

    [**Node.js 설치하기**](https://nodejs.org/ko/)

    ```
    > node -v
    v12.16.1
    ```

    ![Node.js 홈페이지](./Image/Node_js.png)

1. [NPM](https://ko.wikipedia.org/wiki/Npm_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))

    **npm** (노드 패키지 매니저/Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다. 명령 줄 클라이언트(npm), 그리고 공개 패키지와 지블 방식의 개인 패키지의 **온라인 데이터베이스**(npm 레지스트리)로 이루어져 있다. 이 레지스트리는 클라이언트를 통해 접근되며 사용 가능한 패키지들은 npm 웹사이트를 통해 찾아보고 검색할 수 있다. 패키지 관리자와 레지스트리는 npm사에 의해 관리된다.

    패키지 매니저의 예시

    - Python : pip
    - Java : jpm
    - Javascript : npm

    **npm은 node.js를 설치하면 자동으로 설치된다.**

    ```
    > npm -v
    v6.13.4
    ```

    ![npm 홈페이지](./Image/npm.png)

1. [NPX](https://geonlee.tistory.com/32)

    npx는 자바스크립트 패키지 관리 모듈인 npm(Node Package Module)의 npm@5.2.0 버전부터 새로 추가된 도구입니다. 따라서 npm@5.2.0 이상 버전만 깔려 있다면 npx 커맨드를 사용 가능합니다.

    npx는 npm 레지스트리의 패키지 사용 경험을 파악하기 위한 도구입니다 - npm은 레지스트리에서 호스팅되는 종속성을 매우 쉽게 설치하고 관리할 수 있으며, npx는 레지스트리에서 호스팅되는 CLI 도구 및 기타 실행 파일을 쉽게 사용할 수 있습니다. 지금까지 일반적인 npm과 관련하여 약간의 귀찮은 과정들이 필요했던 여러 가지 사항을 크게 단순화합니다.

    **npx 설치하기**

    ```
    > npm intall npx -g
    생략...
    + npx@10.2.2
    added 293 packages from 654 contributors in 11.548s
    > npm -v
    6.13.4
    ```

---

<a id="ch02"></a>

## Ch02 - 리액트로 클론 코딩 시작하기

1. create-react-app으로 리액트 앱 만들기

    facebook에서 관리하는 React Boilerplate code 설치하기 

    > 보일러 플레이트(boilerplate)란 개발을 바로 시작할 수 있도록 만든 기초 환경을 말한다.

    ```
    >npx create-react-app movie_app_2020
    Success! Created movie_app_2020 at C:\movie_app_2020
    Inside that directory, you can run several commands:

        npm start
            Starts the development server.
    (생략...)
    ```

    npx는 create-react-app을 다운로드한 다음 create-react-app movie_app_2020 명령어를 실행하여 리액트 앱을 생성해 준다.

1. 리액트 앱 실행하기

    ```
    > npm start
    Compiled successfully!

    You can now view movie_app_2020 in the browser.

        Local:              http://localhost:3000
        On Your Network:    http://192.168.0.192:3000
    
    (생략...)
    ```

    ![react_start](./Image/react_start.png)

1. 리액트 동작 원리 알아보기

    리액트는 우리가 작성한(또는 수정한) 프로젝트 폴더에 있는 코드를 자바스크립트를 이용하여 해석한다. 그리고 해석한 결과물을 index.html로 끼워 넣는다. 그림으로 표현하면 아래와 같다.

    ![index.html](./Image/index.png)

    리액트는 index.html의 `<div id="root"></div>` 중간에 넣을 결과물을 프로젝트 폴더에 있는 파일(App.js,...)을 해석하여 만들어 넣는 역할을 담당한다.

1. index.js 살펴보기

    index.js폴더를 열어서 아래와 같이 표시된 부분을 살펴보자.
    
    ```js
    ReactDOM.render(<App />, document.getElementById('root'));
    ```
    
    이 코드가 바로 App.js 파일에 작성한 코드를 index.html의 아이디가 'root'인 엘리먼트에 넣어 주는 것이다.

1. index.html 수정해 보기

    index.html 파일을 열어서 `<div id="root"></div>`을 `<div id="potato"></div>`로 바꿔 보자.

    ```html
    (생략...)
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="potato"></div>
            (생략...)
        </body>
    </html>
    ```

    이렇게 하면 아이디가 "potato"로 바뀌니까 앱이 실행되지 않는것을 볼 수 있다.

    > `<App />`을 아이디가 'root'인 엘리먼트에 그려지는데 아이디가 'root'에서 'potato'로 바뀌었으므로 오류가 발생한 것이다.

1. index.js 수정하여 오류 해결하기

    index.html에서 수정한 코드에 맞춰 index.js 파일의 document.getElementById('root')를 document.getElementById('potato')로 수정해 보자.

    ```js
    ReacDOM.render(<App />, document.getElementById('potato'));
    ```

    그러면 리액트 앱이 정상으로 작동한다. 리액트는 index.js에 있는 ReactDOM.render()를 통해 App.js에 있는 `<div>와</div>사이`에 있는 내용을 index.html에 넣어준다. 이 방식은 리액트가 화면을 빠르게 그릴 수 있게 해 주는 장점도 있다.

    ![index.html](./Image/index_html.png)

    그림을 통해 설명하자면, 가장 왼쪽은 빈 index.html이고 오른쪽은 App.js를 해석하며 점점 채워지는 index.html이다. 그림에서 보듯 리액트는 처음부터 모든 HTML을 그려넣지 않는다. 일부 HTML만 그리고 이후 엘리먼트를 추가하거나 제거하는 방식으로 화면을 그린다. 리액트는 화면에 표시된 모든 HTML을 처음부터 그리지 않기 때문에 빠르다.

