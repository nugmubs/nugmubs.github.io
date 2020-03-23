---
title: 라러벨 모델 $appends 프로퍼티
date: 2020-03-22 00:00:00 +0800
categories: [라러벨, 개념설명]
tags: [설명]
toc: true
use_math: true
seo:
  date_modified: 2020-03-23 19:02:04 +0900
---

# 라러벨 모델 $appends 프로퍼티

라러벨의 View Template 에서 reply.blade.php 를 Reply.vue 컴포넌트로 치환하였다. 그리고 
ajaxifying 처럼 동작하도록 axios 동작을 추가한 상태에서 뷰 컴포넌트 디자인은 중첩(Nested) 상태로 구성한 것이 아래와 같다.

```bash
Reply {
    Favorite
}
```

그런데 문제는 Reply 모델에서 Favorite 컴포넌트에 일명 "좋아요" 카운트를 전달해야 하는데, 현재 시점에서는 Reply 객체가 Blade 템플릿에 전달될 때 이러한 기능이 구현되지 않았다는 점이다.

그렇다면 어떻게 Reply 모델과 Favorite 객체를 결합할까?

우선, Reply 모델은 Favoritable trait 을 사용하고 있다. 즉, Reply 모델과 Favorite 모델이 서로 연관되어 있다는 의미이다. 이 말은 즉슨, Reply 모델에서 "좋아요" 카운트를 끌어올 수 있음을 의미한다.

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

trait Favoritable {

    public function favorites() 
    {
        return $this->morphMany(Favorite::class, 'favorited');
    }

    // .... 중략

    public function getFavoritesCountAttribute()
    {
        return $this->favorites->count();
    }
}
```

실제로 `getFavoritesCountAttribute` 메서드가 이미 구현되어 있는 상태이다. 그러나, 아직은 Reply 모델을 조회할 때 이 내용의 데이터가 같이 조회되지 않는다.

이때, `$appends` attributes 를 사용하여 `favoritesCount` 를 배열내의 멤버로 지정할 경우 Reply 모델은 별도의 메서드나 Relation 를 사용하지 않아도 당해 Reply 레코드에 대해 "좋아요" 버튼을 클릭한 횟수를 출력할 수 있게된다.

Favorite trait 에서 중요한 약속이 있는데 그것은 `getFavoritesCountAttribute` 이다.

만약 여러분이 favoritesCount 라는 attributes 를 Reply 모델에서 인스턴스를 가져올 때에 하나의 칼럼처럼 출력하고자 한다면 아래의 변환단계를 거쳐서 Favorite trait 에 선언을 한다.

favoritesCount -> FavoritesCount -> get + FavoritesCount + Attribute -> getFavoritesCountAttribute

즉, 접두어로 get, 접미어로 Attribute 를 붙이면 라러벨이 약속하는 getter 가 완성되고 이를 메서드(public 한정자)로 선언하면 사용할 수 있게된다.

라러벨은 이러한 류의 약속을 걸어두는 편인데, 지금까지 강좌를 진행하면서 두번 정도 목격한 바 있다. 이제부터는 차근차근 정리를 해둘 요량이다.
