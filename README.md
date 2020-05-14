# 블로그 관리

태그, 카테고리 기능이 장착되어 있으며 이를 관리하기 위해서는 빌드 작업이 필요하다.

아래의 명령을 실행하면 처음 환경에서도 블로그를 구성할 수 있다.

```zsh
python3 -m venv gitpages-venv # create virtual python environment
. ../gitpages-venv/bin/activate # activate python environment
pip install -r ./_scripts/utils/requirement.txt # install python dependencies
./tools/init.sh # generate tag, categories html
git push # upload published files
```

이 블로그는 [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 를 차용하였다.