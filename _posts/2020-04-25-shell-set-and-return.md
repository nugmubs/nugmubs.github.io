---
title: (쉘스크립팅) set -e 와 return 의 관계
date: 2020-04-25 00:00:00 +0800
categories: [쉘스크립팅, 문법]
tags: [ZSH, Syntax]
toc: true
use_math: false
seo:
  date_modified: 2020-05-14 09:02:19 +0900
---

## set 명령
 
 
저는 현재 쉘 스크립트를 이용해 보안 테스트 도구를 편리하게 사용하는 툴 셋을 개발하고 있는데요

쉘 스크립팅을 하다보면 set 명령을 이용해서 쉘 스크립트 파일을 아우르는 조건을 지정할 수 있습니다. 