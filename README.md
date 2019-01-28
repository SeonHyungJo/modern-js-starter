# modern-js-starter

Setup pre-commit hook

- Add husky
- Add lint-staged
- Create Hook

<br/>

## husky

허스키이다. 뭔가 귀여운 강아지가 연상되는 이름이다. 간단하게 설명을 하면 우리가 `git`을 사용하면서 `git commit` 과 `git push` 를 남발하게 되면서 이루어지는 실수를 잡아주도록 도와주는 라이브러리이다.

> Husky can prevent bad git commit, git push and more 🐶 woof!

쉽게 생각을 하면 우리가 eslint를 적용하고 prettier를 적용했다 하더라도 vim같은 edtor로 수정을 해서 저장을 한다면 자동으로 저장시에 문법을 잡아준다거나 코딩스타일을 잡아줄수는 없다. 또한 문법적 에러를 보여주지도 않는다.

여기에 commit 시점이나 push 시점전에 자동으로 fix를 해준다면 git에 올라가있는 소스들이 엄청나게 깔끔해질 것이다.

```js
  // package.json
  {
    "husky": {
      "hooks": {
        "pre-commit": "npm test",
        "pre-push": "npm test",
        "...": "..."
      }
    }
  }
```

위에 예시를 보게 된다면 쉽게 이해가 될 것이다. `pre-commit` `pre-push`라는 script에서 부터 이해가 될 것으로 생각이 된다. 이렇게 해줌으로써 코드를 서버에 올리기 전에 작업을 거치게 할 수 있게 되는 것이다.

> [GitHub 주소](https://github.com/typicode/husky)

<br/>

## lint-staged

staged된 파일들을 lint 해주는 도구이다. Husky와 같이 쓰면 staged된 파일들에 대해서 특정 작업을 수행하게 할 수 있다.

흔한 예시가 있다.

```js
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  }
}
```

위와 같이 하게 되면 js파일을 대상으로 `eslint --fix` 작업과 `git add` 를 진행하게 된다. 생각해보면 별거 없다고 생각하지만 코드관리에 있어서 중요한 역할을 한다.
<br/>

## Hook

위의 2가지의 라이브러리를 가지고 우리는 prettier를 적용할 수 있게 되는 것이다. 그렇게 하게 되면 어떤 에디터를 사용해서 수정을 하고 git으로 올리더라도 commit 시점 전에 prettier를 거치게 되면서 이쁘게 된 파일이 올라가게 되는 것이다.

```js
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "npm run lint:fix",
      "git add"
    ]
  }
```

:point_right: [Chapter 5 바로가기](https://github.com/SeonHyungJo/modern-js-starter/tree/CH-5)
