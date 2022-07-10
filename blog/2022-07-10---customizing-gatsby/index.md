---
title: "커스터마이징 Gatsby: 기본적인 커스터마이징 구도 잡기"
date: "2022-07-10"
draft: false
author: Nugmubs
tags:
  - gatsby
  - 커스터마이징
---

Gatsby를 이용하여 블로그를 작성하고 이를 deploy 한다. 기본적인 구도를 잡기 위해서 아래의 작업 계획을 수립하였음. 그리고 
기본적인 구성을 완료하였음 

- 완료된 항목
  - 비디오 링크 
  - PDF 파일 링크
  - Syntax Highlighting
  - D2Coding 폰트 적용
  - 이미지 로컬 참조
  - 포스트/태그 동적 파일 생성


## TODO

- [jupyter notebook files.](https://www.gatsbyjs.com/plugins/@gatsby-contrib/gatsby-transformer-ipynb/)
  - 주피터 노트북을 임포트하도록 구성, 데이터 분석 결과를 블로그 내에 게시하는 용도로 사용
- 랜딩 페이지의 CSS 개선
- Footer, Header 추가
- ToC 사이드바 
- 화면 사이즈별 최적화
- 구글 검색 SEO 추가


## deploy 에러 해결 

`npm run deploy` 명령을 실행하는 도중에 아래와 같은 에러가 발생할 경우 대응방법을 소개

- [fatal: A branch named 'gh-pages' already exists](https://stackoverflow.com/a/63972301/8536042)


```bash
git fetch --prune
```

```bash
rm -rf node_modules/.cache/gh-pages
```

## 작업 계획

- blog 폴더에 게시할 글에 대한 폴더를 생성하고 index.md 파일을 통해서 컨텐츠를 작성한다. 
  - 해당 폴더 내에 이미지 등의 파일을 저장하고 Gatsby로 하여금 이를 렌더링하도록 제어한다.
- 스타일링은 생각하지 않음, 나중에 천천히 틀을 바꾸어감.
  - 단, 폰트는 D2Coding 폰트로 교체한다. (감성적인 이유)
- `excerpt_separator`를 이용해서 블로그 리스트업에 사용할 요약문을 지정할 수 있음
- Syntax Highlight를 이용한다.
  - Syntax Hightlight 를 위해서 `@deckdeckgo/highlight-code` 모듈을 사용

## Youtube Video Link

- Youtube iframe 임베드를 위해 `gatsby-remark-responsive-iframe` 플러그인을 설치
- 위대한 개츠비 OST를 잠시 감상해보자.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LVHU_YWV3e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 이미지 로컬 바인딩

- 폴더 내에 이미지 파일을 아래와 같이두고 상대 경로로 접근할 수 있음

```bash
- 2022-07-10---customizing-gatsby
  - example.png
  - index.md
```

```markdown
<!-- filename: index.md -->
이미지 파일을 아래와 같이 삽입 가능!
![](example.png)
```

![](example.png)

## PDF 파일 다운로드

- `gatsby-remark-copy-linked-files` 플러그인을 통해, PDF 파일에 대해서도 임포트가 가능

[Creative Commons Informational Flyer.pdf](Creativecommons-informational-flyer_eng.pdf)

## Syntax Highlight

- [사용방법: gatsby-remark-highlight-code](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)

```bash
npm install --save gatsby-transformer-remark gatsby-remark-highlight-code @deckdeckgo/highlight-code
```

멋진 syntax 하이라이트 코드를 획득하였으나, 아래와 같이 `Could not resolve dependency` 경고가 발생하여 `npm install --force` 
옵션을 강제로 사용할 수 밖에 없는 상황이다.

```bash
npm WARN Could not resolve dependency:
npm WARN peer @deckdeckgo/highlight-code@"^3.6.0" from gatsby-remark-highlight-code@3.2.0
```

## gatsby-node.js 를 이용한 동적 페이지 생성

- 알게된 사실
  - createPage 내에서 에러가 발생하면, gatsby 프로세스는 바로 종료됨. 따라서, 인자 검증을 신경써야 함.
- 구현 요건
  - `[ProjectRoot]/blog` 폴더 내에 `yyyy-MM-dd---title` 과 같은 폴더를 생성하고 index.md 파일을 둔다.
  - 동일 폴더에 image 들은 상대 경로로 지정된다. 그리고 PDF 파일의 경우 

## 폰트 적용

- 로컬 파일에 내가 원하는 폰트를 저장해두고, 이를 로딩하도록 함.
- 참고: [using-local-fonts](https://www.gatsbyjs.com/docs/how-to/styling/using-local-fonts/)
- 방법 1. 직접 폰트에 놓기
  - src/fonts 폴더를 생성하고, D2Coding.woff2 파일을 옮김
  - [font-d2coding](https://github.com/Joungkyun/font-d2coding) 을 참조하여 
- 방법 2. jsdelivr.net 를 이용한 방법 (V: 채택)
  - [눈누: D2Coding ](https://noonnu.cc/font_page/92) 의 웹폰트 사용방법을 참고하여 css 스타일에 적용
  