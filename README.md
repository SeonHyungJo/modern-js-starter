# modern-js-starter

Setup rollup and setting

- Add rollup
- Setting config

<br/>

## rollup

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.

우리가 알고 있는 webpack이 있다. 다른 것으로는 rollup을 들 수 있다. 기존의 webpack2에서 Tree-Shaking 이 지원이 되지 않았을 당시 rollup의 Tree-Shaking 의 기능은 엄청났었다. 그 후로 다시 webpack4에서 추가가 되면서 당연한 기능이 되고 말았다. webpack보다는 가볍고 간단하게 설정이 가능하다는 강점은 아직도 가지고 있다.

### rollup.config.js

rollup은 root에 위치한 파일을 보고 자동으로 빌드를 시작한다. 당연한게 config를 잘 설정해주어야한다.
여기서 우리는 3가지의 버전으로 만들려고 한다. commonjs, ecmascript module, Universal Module Definition이다.
rollup 에서는 간단하게 output을 리스트로 하여 나눌수 있다.

:point_right: [Chapter 6 바로가기](https://github.com/SeonHyungJo/modern-js-starter/tree/CH-6)
