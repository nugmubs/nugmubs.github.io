---
title: 부동산 분석 머신 러닝 프로젝트 초간단 정리
date: 2020-03-22 00:00:00 +0800
categories: [머신러닝, 토이프로젝트]
tags: [초간단]
toc: true
seo:
  date_modified: 2020-03-22 18:33:19 +0900
---

이 내용은 [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition](http://11st.kr/QR/P/2651010385) 을 참고하여 작성되었습니다. 공부를 위해 지엽적인 설명은 최대한 요약하고 핵심적인 내용을 간추리기 위해 노력하였습니다.



Whit a square image (PNG, JPG or GIF) in hand, open the site [*Favicon & App Icon Generator*](https://www.favicon-generator.org/) and upload your original image.

![upload-image]({{ "/assets/img/sample/upload-image.png" | relative_url }})

Click button <kbd>Create Favicon</kbd> and wait a moment for the website to generate the icons of various sizes automatically.

![download-icons]({{ "/assets/img/sample/download-icons.png" | relative_url }})

Download the generated package, unzip and delete the following two from the extracted files:

- browserconfig.xml
- manifest.json
 
Now, copy the rest image files (`.PNG` and `.ICO`) to cover the original one in folder `assets/img/favicons/`.

Lastly, don't forget to rebuild your site so that the icon becomes your custom edition.
