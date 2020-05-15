---
title: (깃깃깃) 깃 정리 (1)
date: 2020-05-14 00:00:00 +0800
categories: [Git, 사용법]
tags: [tutorial, basic]
toc: true
use_math: false
seo:
  date_modified: 2020-05-14 09:02:19 +0900
---

## Git Git Git (Three Git)

저는 현재 깃을 사용 중인데 한번씩 개념이 혼동될 때가 있어 정리하는 기회를 가지게 되었습니다.

우선, 깃의 명령이 가지는 의미를 정리해 봐야겠는데요. 이 정리는 [Atlassian : git 용어집](https://www.atlassian.com/git/glossary) 를 참고하였습니다. 참고로 아틀라시안은 JIRA, Bitbucket 을 서비스하는 소프트웨어 업체입니다.

## Git Commands

깃은 로컬에서 소스코드를 관리하고 원격에서도 관리할 수 있는 기능을 제공해줍니다. 따라서 라이프 사이클이 복잡할 수 있는데 우리가 무심코 사용하는 명령어를 정리하게될 경우 의미가 명확해집니다. 즉, 기초를 다지는 셈이죠.

### ADD 명령

깃은 스테이징 영역(Staging Area)라고 부르는 별도의 영역을 관리합니다. 이 명령은 변경(changes)된 내용을 현재 작업 디렉터리(working directory)에서 스테이징 영역으로 옵깁니다.

이 명령은 여러분의 변경 기록이 공식적인 기록(official history)에 남기기(commit, 기록에 남기다는 의미로 사용) 전에 스냅샷을 준비할 기회를 제공합니다.

모든 변경 사항을 무작정 공식적인 기록에 남기는 것은 부담스러운 일이겠죠? 😇 따라서 중간 과정을 통해서 숙고할 수 있는 기회를 주는 것입니다.

### Branch 명령

범용 브랜치 관리 도구입니다. 단일 Repository 에서 격리된 개발환경을 생성하게 해줍니다. 여기서 격리라는 말은 별도로 이름이 명명된 저장소를 의미합니다.

가령 여러분이 현재 작업하고 있는 환경의 이름을 Real 이라고 명명한다면 Dev 라는 브랜치를 생성하여 Real 코드를 변경할 수 있음을 의미합니다. Dev 라고 명명된 격리된 개발 환경에서는 아무리 코드를 변경해도 Real 의 코드가 변경되지 않습니다. 즉, 안전하게 코드를 목적에 맞게 추가하거나 뺄 수 있음을 의미합니다.

### 관련 명령어

브랜치와 관련된 명령은 `checkout`, `merge` 가 있습니다. 나중에 설명할 내용이니 참고해주세요

## Checkout 명령

체크 아웃이라는 용어가 있습니다. 저도 처음에는 그런가 보다라고 넘어갔습니다만 중요한 순간에 개념이 혼동되어 낭패를 본 일이 있습니다. 

## Commit 명령

### 커밋 수정 옵션 (--amend)

> 이 내용은 [아틀라시안: Rewriting History](https://www.atlassian.com/git/tutorials/rewriting-history) 를 참고하였습니다. 



```bash
git commit --amend
```
