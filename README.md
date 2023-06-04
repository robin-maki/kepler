# kepler
[바로가기](https://kepler.planet.moe)
네트워킹 행사들의 일정을 모아서 볼 수 있는 사이트입니다.
## 기여 가이드
`data` 폴더에 적당한 이름의 yaml 파일을 만들어서 Pull Request를 보내주세요.
### yaml 파일 예시
```yaml
name: 행사 이름
description: 행사 설명
thumbnail: 썸네일 이미지 주소
date: 행사 일시(2023-08-26 18:00 포맷을 추천하지만 moment.js가 지원하는 포맷이면 무엇이든 상관 없어요.)
location: 행사 주소
link:
  버튼 이름1: 버튼 링크1
  버튼 이름2: 버튼 링크2...
```
