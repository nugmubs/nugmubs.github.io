---
title: 라러벨 5.x 버전 glyphicon 아이콘 문제 해결 방법
date: 2020-03-22 00:00:00 +0800
categories: [라러벨, 문제해결]
tags: [오류]
toc: true
use_math: false
seo:
  date_modified: 2020-05-14 09:02:19 +0900
---

# 2020.03.24 배운 내용

RecordActivity trait 을 통해 모델에 대해 delete 가 발생하면
활동 기록 (Activity 모델)이 함께 삭제되도록 구현하였다.
그러나, 아래와 같이 where 절과 함께 delete 를 사용할 경우 
trait 을 통해 구현한 static::deleting 클로저가 정상 동작하지 않음
이를해결하기 위해서는 model 을 불러내어 delete 를 해주어야 하는데, 
해당 문법 스타일이 아래와 같다. 우선 ->get() 메서드를 통해 
쿼리를 실행시켜 데이터를 얻어오고 ->each(function () {}) 클로저를 통해
하나하나씩 삭제해 주는 것이 그 답이다.

## 시나리오

Reply 를 생성하고 이를 Favorite 한 뒤에 Reply 를 지우게되면 오류가 발생하는가?
