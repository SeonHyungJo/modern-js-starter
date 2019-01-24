# :green_apple: Chapter 2

Add editorconfig

- Create .editorconfig file

나도 회사에 들어가서 이런 파일이 있는 것을 보기 전까지는 이런게 존재한다는 사실조차 몰랐다. 그런데 라이브러리를 보다보면 생각보다 사람들이 기본적으로 셋팅을 하는 config파일 중에 하나였다는 사실을 알게 되었다. 
<br/>

그렇다면 이렇게 귀엽게 생긴 강아지의 editor config는 무엇일까?
<br/>

## editorconfig

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

간단하게 말하자면 여러 개발자들이 동시에 개발을 하게 되면 당연하게도 코딩스타일이 다르다. 이에 코딩스타일을 명시를 하여 동일한 코딩스타일로 작업을 하도록 도와주는 설정파일이었다. 정말 별거없다.
<br/>

설정 또한 많지 않다. 요즘 eslint, webpack이며 플러그인과 설정이 엄청나게 많지만 이건 간단하다.
<br/>

## 속성

- **indent_style** : set to `tab` or `space` to use hard tabs or soft tabs respectively.

- **indent_size** : a whole number defining the number of columns used for each indentation level and the width of soft tabs (when supported). When set to tab, the value of tab_width (if specified) will be used.

> 기본적으로 4, 2로 사용을 하는데 저의 경우는 2를 많이 사용합니다. 4는 너무 많이 들어가네요.

- **tab_width** : a whole number defining the number of columns used to represent a tab character. This defaults to the value of indent_size and doesn't usually need to be specified.

- **end_of_line**: set to `lf`, `cr`, or `crlf` to control how line breaks are represented.

> lf, cr, crlf에 대한 간단한 역사는 [클릭해서 보세요](https://ohgyun.com/554)

- **charset** : set to `latin1`, `utf-8`, `utf-8-bom`, `utf-16be` or `utf-16le` to control the character set.

> 한국사람은 기본값으로 utf-8을 사용할 것 같네요

- **trim_trailing_whitespace** : set to true to remove any whitespace characters preceding newline characters and false to ensure it doesn't.

> 기본적으로 개행 앞에 공백은 제거하고 싶어하시니까 true

- **insert_final_newline** : set to true to ensure file ends with a newline when saving and false to ensure it doesn't.

- **root** : special property that should be specified at the top of the file outside of any sections. Set to true to stop .editorconfig files search on current file.

<br/>

## 예시

```js
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
```

위에 보이는 내용이 제가 적용한 기본값입니다. 정말 간단하죠?
<br/>

[editorconfig 공식 홈페이지](https://editorconfig.org/#file-format-details)
:point_right: [Chapter 3 바로가기](https://github.com/SeonHyungJo/modern-js-starter/tree/CH-3)