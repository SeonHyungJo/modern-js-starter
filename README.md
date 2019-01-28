# modern-js-starter

Add eslint and prettier

- Add eslint
- Add prettier-eslint

## eslint

간단하게 말하면 자바스크립트 문법적 에러를 찾아주는 라이브러리이다.

> [Git 주소](https://github.com/eslint/eslint)

eslint의 기본적인 설정을 커스텀으로 진행을 한다면 엄청난 일이 벌어질 것이다. 그래서 여기서는 간단하게 셋팅하는 방법을 설명하려고 한다. 기본적으로 eslint에서는 간단하게 설정을 할 수 있게 만들어 주었다.

```
npm i -D eslint // 간단하게 eslint를 설치한다.

eslint --init // 이렇게 사용하려면 당연하게 eslint를 전역으로 설치를 했어야 한다. 그러나 우리는 dev로 설치를 해서 작동하지 않을 것이다.
```

위와 같이 dev로 설치를 하게 되면 환경변수로 잡히지 않기 때문에 eslint를 찾을 수 없다고 나올 것이다. 그래서 우리는 전역을 더럽히지 않고 사용할 수 있는 방법을 사용하려고 한다.
<br/>

### npx

> [npx가 뭐지?](https://github.com/SeonHyungJo/FrontEnd-Dev/blob/master/Javascript/NPX.md)

이걸 사용하게 되면 임시로 레지스트리에 올려서 사용할 수 있는 것이다. 이것을 사용해서 `eslint --init` 를 해보자

```
npx eslint --init // 이렇게 하면 여러 질문을 할 것이다.
```

그럼 우리는 이미 만들어져있는 스타일 가이드를 선택 => Airbnb도 많이 사용하지만 우리는 standard로 가자 => JSON => 바로 설치 진행(Y)
<br/>

바로 설치를 하게 되면 package.json에 eslint standard에 필요한 라이브러리가 같이 설치가 된다.
<br/>

이렇게 하면 이제 간단하게 eslint 셋팅이 끝났다.
<br/>

> [standard js에 대해서](https://standardjs.com/)
 > <br/>

## prettier

간단하게 말하면 이름 그대로 정말로 코드를 이쁘게 해주는 라이브러리이다.

> [Git 주소](https://github.com/prettier/prettier)

:point_right: [Chapter 4 바로가기](https://github.com/SeonHyungJo/modern-js-starter/tree/CH-4)
