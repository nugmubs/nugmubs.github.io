---
title: 부동산 분석 머신 러닝 프로젝트 초간단 정리
date: 2020-03-22 00:00:00 +0800
categories: [머신러닝, 토이프로젝트]
tags: [초간단]
toc: true
use_math: true
seo:
  date_modified: 2020-03-23 19:02:04 +0900
---

이 내용은 [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition](http://11st.kr/QR/P/2651010385) 을 참고하여 작성되었습니다. 내용 전달을 위해 지엽적인 설명은 최대한 요약하고 핵심적인 내용을 간추리기 위해 노력하였습니다.

## 머신 러닝 프로젝트 절차

본 책의 내용에서 챕터 2장은 부동산 데이터를 바탕으로 머신 러닝 프로젝트를 하는 절차를 수록하고 있습니다. 지면을 위해 간략한 내용을 간추렸으며 공부와 쉬운 전달을 위해 불필요한 부분은 요약하고 부연 설명이 필요한 부분은 주석을 남겼습니다.

가벼운 마음으로 개괄적인 프로젝트를 감상한다고 생각하시고 읽어주시면 감사하겠습니다.

머신 러닝 프로젝트의 메인 스텝은 아래와 같이 분할이 가능합니다. 메인 스텝이니 지엽적인 스텝이 빠져있을 것 같습니다. 필요한 부분은 별도의 주석으로 설명하도록 하겠습니다.

1. Look at the big picture (큰 그림 그리기)
2. Get the data (데이터 수집하기)
3. Discover and visualize the data to gain insights (인사이트를 얻기 위한 데이터 발견과 시각화)
4. Prepare the data for Machine Learning algorithms (머신러닝 알고리즘을 위한 데이터 준비)
5. Select a model and train it (모델을 선택하고 훈련)
6. Fine-tune your model (모델 튜닝하기)
7. Present your solution (해결책 제시)
8. Launch, monitor, and maintain your system (시스템 구동, 모니터링, 유지보수하기)

## Real World Data (실제 데이터)

### 유명 오픈 데이터 저장소(Repository)

- [UC Irvine](http://archive.ics.uci.edu/ml/)
- [Kaggle](https://www.kaggle.com/datasets)
- [Amazon](https://registry.opendata.aws/)


### 오픈 데이터 저장소 검색 포털(Meta Portals)

- [Data Portal](http://dataportals.org/)
- [OpenDataMonitor](http://opendatamonitor.eu/)
- [Quandl](http://quandl.com/)

### 오픈 데이터 저장소 목록

- [Wikipedia ML Datasets List](https://homl.info/9)
- [Quora.com](https://homl.info/10)
- [Reddit Datasets](https://www.reddit.com/r/datasets)

## 사용할 데이터 예시

이 프로젝트에서는 California Housing Prices 데이터 셋을 사용할 것입니다. 데이터 셋은 StatLib 리포지터리에서 제공하는 데이터 1990 년대 캘리포니아 통계청(California Census)의 데이터를 기반으로 합니다.

이 데이터는 최신은 아니지만 학습에 있어서 유용합니다. 그리고 저자는 몇가지 분류를 위한 속성을 추가하고 불필요한 피처들은 제거하였습니다.

## 빅 픽처 보기

우리는 지금부터 **머신러닝 주택회사** 입니다. 그리고 우리의 첫번째 업무는 캘리포니아 통계청의 데이터를 사용하여 캘리포니아 주의 주택 가격에 대한 모델을 만드는 것입니다. **그리고 프로젝트의 목표는 데이터를 학습하여 평균 주택 가격(median housing price)를 예측하는 시스템을 만드는 것입니다.**

이 데이터는 아래의 메트릭(metrics)을 포함하고 있습니다.

> {TIP} 메트릭이란? 계량[측량]의, 계량룡의 형용사의 의미를 지니며 계량, 거리 등의 명사로 사용됩니다. 즉, 측량, 측정하여 수치화된 데이터를 의미합니다.

- 인구(Population)
- 평균 수입(median income)
- 블록 그룹 당 평균 주택 가격(median housing prices for each block group)

> {TIP} Block 그룹이란 US 통계청에서 제공하는 데이터에서 지정학적인 최소단위 입니다. 보통 블록 당 600 에서 3,000 명이 거주합니다.

이제부터 블록을 "구역(districts)"라고 줄여서 표현하겠습니다. 

### 정리

- 600에서 3,000 명이 거주하는 최소 거주 구분 단위인 블록 그룹(Block groups)은 구역(districts)라고 표현합니다.
- 메트릭은 측정하여 수치화된 데이터를 의미합니다.

### 프로젝트 팁

제일 처음으로 해야 할 일은 머신러닝 프로젝트 체크리스트를 가져오는 것입니다. 이 내용은 별도로 정리된 링크를 따라주세요. 이 과정에서는 체크리스트의 일부 내용이 생략될 수 있습니다. 생략된 체크리스트의 항목들은 자전적인 성격이거나 나중에 다루어질 내용입니다.

<!-- _posts/2020-03-23-machine-learning-project-checklist.md -->
- [머신 러닝 프로젝트 체크리스트]({{ site.baseurl }}{% link _posts/2020-03-23-machine-learning-project-checklist.md %})

## 문제의 틀을 정하기 (Frame the problem)

우선 부동산 회사의 데이터 과학자로서 여러분이 대표에게 할 수 있는 질문은 무엇일까요? 바로 **1) 비즈니스 목적이 무엇이느냐**입니다. 모델을 만드는 것이 최종 목적이어선 안될 것입니다.

첫째로, 여러분의 모델을 기업이 어떻게 사용하고 어떻게 이익을 얻을 지를 생각해봐야합니다.

따라서, 핵심 목표가 중요하며 이에 따라 아래의 사항을 결정하면 됩니다.

1. 어떻게 문제의 틀을 정할 것인가
2. 어떠한 알고리즘을 선택할 것인가
3. 모델을 평가하기 위한 성과 측정 방법을 무엇으로 할 것인가
4. 얼마만큼의 노력이 필요한가?

![machine-learning-pipeline-for-real-estate-investment]({{ "/assets/img/ml/mls2_0202.png" | relative_url }})

여러분의 대표는 모델의 결과(구역의 평균 주택 가격의 예측)을 또 다른 머신 러닝 시스템에 제공(feed)할 것이라고 말합니다. 그리고 또 다른 여러 시그널(signal)들을 제공할 것입니다.

제공 받는 시스템을 다운스트림 시스템이라고 하며 이 시스템은 해당 지역에 투자할 가치가 있는지를 판단합니다. 즉, 여러분의 업무는 수익에 영향을 주는 중요한 권한을 가지게 됩니다.

> {TIP} **시그널(Signal)**은 머신 러닝 시스템에 제공되는 정보의 조각을 의미합니다. Claude Shannon 의 정보 이론(Information theory)에 따르면 여러분이 원하는 것은 시그널과 잡음의 비율에서 시그널의 비율이 높은 것을 원한다고 합니다.(His theory: you want a high signal-to-noise ratio).

### 파이프 라인

파이프라인이란 데이터 처리 컴포넌트들의 연속적인 흐름(주석, sequence 를 순서라고 해석하기는 애매하므로 연속적 흐름이라고 표현)입니다. 머신러닝에서는 파이프라인이란 매우 흔하게 볼수 있습니다. 그 이유는 데이터 조작과 변환이 빈번하게 일어나야 하기 때문입니다.

이 파이프라인은 여러 컴포넌트들이 비동기적으로 구동됩니다. 각 컴포넌트는 엄청난 양의 데이터를 끌어다가(Pull in) 처리(process)합니다. 그리고 이를 또 다른 데이터 스토어(another data store)에 뱉어(spit out) 놓게됩니다. 그럼 잠시 후에 또 다른 컴포넌트가 뱉은 데이터를 가지고 처리를 하는 방식으로 연쇄적으로 움직입니다.

데이터 스토어(data store)를 언급하였습니다. 이 데이터 스토어가 인터페이스 역할을 합니다. 데이터 스토어가 인터페이스가 되므로 시스템이 파악하기 쉽습니다. 그리고 각 팀이 다른 컴포넌트에 집중하기에 용이합니다.

데이터 스토어가 인터페이스가 되는 아키텍처는 상당히 견고(robust)합니다. 만약 어떠한 컴포넌트가 갑작스레 중지(break down)하더라도 다운스트림(downstream) 컴포넌트는 이전의 데이터를 사용할 수 있으므로 정상적으로 동작합니다.

그러나 만약 적절한 모니터링이 이루어지지 않는다면 중단된 컴포넌트가 알려지지 않은 체로 일정기간을 유지하게되며 그 결과 전체적인 시스템의 성능이 감소하게됩니다.

### 현재 사용 중인 방식의 고려

아래의 시나리오는 여러분에게 실제 프로젝트 현장을 잘 알려주기에 남기었습니다.

다음으로 여러분이 대표에게 물어볼 것은 **3) 현재 사용 중인 방식은 무엇인가?** 입니다(여기서 3번은 체크리스트의 항목 번호입니다). 현재 사용 중인 방식은 앞으로 진행할 프로젝트에 성능 참고 사항이 됩니다. 뿐만아니라 문제해결을 위한 인사이트를 제공해줍니다.

보스는 아래와 같이 말해주는 군요

- 구역(district)에 대한 최신 정보를 수작업으로 진행하며 평균 주택 가격을 얻지 못할 때는 복잡한 규칙을 사용하여 이를 추정(estimates)합니다.

이 작업은 매우 비용이 많이 소요될 것으로 보입니다. 그리고 추정이 그렇게 훌륭하지 않네요. 더군다나 성능 지표라고 할 수 있는 추정치는 20% 이상 차이가 난다고 합니다.

따라서 회사의 입장에서는 모델을 훈련시켜 구역의 평균 주택 가격을 예측하는 것이 더 유용하다고 판단하였습니다.

그리고 US 통계청의 통계 자료는 평균 주택 가격과 다른 데이터들을 제공해주니 목적에 부합하는 데이터입니다. (목적에 부합하는 데이터, 데이터에 부합하는 목적이 아님을 명심)

### 시스템 설계 상의 질문

이제 시스템을 설계할 차례이네요. 지금까지는 문제 틀을 정하는 작업이었습니다.  그렇다면 아래의 질문에 대답해볼까요?

<!-- 아래는 내가 작성한 답... -->
> 데이터 종류에 따라 Supervised, Unsupervised, Reinforcement 를 결정할 수 있습니다. 머신 러닝의 결과의 종류에 따라 분류, 회귀 등의 작업을 선택할 수 있습니다. 시스템의 성격에 따라 배치, 온라인 학습을 선택할 수 있습니다. 

> 1) 작업 결과의 종류에 따라 예측이면 regression, 분류면 classification.  2) 데이터에 라벨링을 할 수 있다면 Supervised 그렇지 않다면 Unsupervised. 3) 물처럼 지속적으로 데이터가 공급된다면 (공급되는 이유에는 데이터가 너무 크거나 시간에 따라 계속 데이터가 유입된다면) 온라인 학습이 적절하며 그렇지 않은 경우 배치 학습이 적절하다.


- Supervised, Unsupervised, Reinforcement 학습 중 어떠한 학습이 적절할까요?
  - (데이터를 고려) 라벨링(labeled) 훈련 예시가 주어지므로 Supervised 학습이 적절합니다.
- 분류(classification), 회귀(regression) 등의 작업 중 어떤 것이 적절할까요?
  - (예측의 문제이므로) 전형적인 회귀(regression) 작업(task)가 적절합니다. 좀 더 구술하자면 다중 회귀(multiple regression) 작업이겠네요. 이는 다중 피처를 예측에 사용해야 하기때문입니다(구역 당 인구, 평균 수입 등의 피처를 사용).  (TODO: 번역 필요) **It is also a univariate regression problem, since we are only trying to predict a single value for each district. If we were trying to predict multiple values per district, it would be a multivariate regression problem.**
- 배치 학습(Batch Learning) 혹은 온라인 학습(Online Leraning) 중 어떤 것이 적절할까요?
  - 데이터의 흐름에 연속적인 측면이 없으므로 변경되는 데이터를 바로 반영할 필요는 없습니다. 그리고 데이터의 크기는 적으므로 메모리 상에 놓일 필요는 없습니다. 따라서 단순 배치 학습을 적용해도 무방해보입니다.

> {TIP} 만약 데이터가 크다면 서버들에 배치 학습 작업을 나누는 MapReduce 기술을 사용합니다. 혹은 온라인 학습을 선택하는 것도 방법입니다.

#### regression problem

TODO: 아래의 내용을 보충합니다.

- univariate regression problem
- multivariate regression problem
- multiple regression problem
- single regression problem

## 성능 측정 방법 선택

회귀(regression) 문제에서 전형적인 성능 측정 방법으로 Root Mean Square Error (RMSE) 가 있습니다. 이 측정 방식은 얼마나 많은 에러를 시스템이 예측에서 발생시키는가 있습니다. 많은 에러가 발생하는데 가중치를 더 높게 잡는 방식입니다. 아래는 계산 방정식 입니다.

$$
RMSE(\textbf{X},h) = \sqrt{\frac{1}{m} \sum_{i=1}^{m} (h(\textbf{x}^{(i)}) - y^{(i)})^{2}}
$$

### 수식 표기법 및 해설

일단 위의 수식은 예측치와 실제 값 (과거 데이터)의 차이를 구한 제곱에 대한 평균입니다. 에러 제곱의 평균을 제곱근으로 나눈 것입니다.

여기서 기호가 의미하는 바를 알아두면 나중에도 수식을 읽기에 용이합니다. 

Whit a square image (PNG, JPG or GIF) in hand, open the site [*Favicon & App Icon Generator*](https://www.favicon-generator.org/) and upload your original image.

![upload-image]({{ "/assets/img/sample/upload-image.png" | relative_url }})

Click button <kbd>Create Favicon</kbd> and wait a moment for the website to generate the icons of various sizes automatically.

![download-icons]({{ "/assets/img/sample/download-icons.png" | relative_url }})

Download the generated package, unzip and delete the following two from the extracted files:

- browserconfig.xml
- manifest.json
 
Now, copy the rest image files (`.PNG` and `.ICO`) to cover the original one in folder `assets/img/favicons/`.

Lastly, don't forget to rebuild your site so that the icon becomes your custom edition.
