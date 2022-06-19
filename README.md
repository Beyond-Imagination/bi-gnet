# 귀농어때 Fonrtend 가이드

## 시작하기

```shell
npm install  #or yarn install
npm start  # or yarn start
```

## 주요 라이브러리

### React Query

- https://react-query.tanstack.com/

- React를 위한 강력하고 성능 좋은 데이터 동기화

- "전역 상태"를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트합니다.

### Recoil

- https://recoiljs.org/ko/

- React를 위한 상태관리 라이브러리

## 디렉터리 구조

### 1.Container (XXXContainer pattern)

- 비즈니스 로직 작성을 위한 컴포넌트
- 데이터와 데이터 컨트롤 관련 함수 작성
- 주요 데이터 및 함수를 View component에 제공

### 2. View (XXXVeiw pattern)

- UI 작성용 컴포넌트
- Container 로부터 주입받은 데이터를 활용하여 출력하는 함수
- 데이터 수정 과같은 로직은 피해야합니다.

### 3. Global State (~/src/global-state)

- Recoil 관련 코드가 저장됨
- 모든 컴포넌트들에서 공통적으로 사용되는 스테이트들을 관리하기위한 코드

## 주요 참고 코드

### 선택된 지역 가져오기

```javascript
import {useRecoilState} from "recoil";
import {provinceState} from "../global-state/province"

const XXXContainer: React.FC = () => {
    const [province, setProvince] = useRecoilState(provinceState); //선택된 지역 가져오기
    return (
        <XXXView></XXXView>
    )
}
```

### API 연동하기

```javascript

const fetchStatList = () =>
    fetch('https://localhost:8080/stats') // 요청할 API 주소
        .then(res => res.json());

const StatContainer: React.FC = () => {
    const {status, data, error} = useQuery("stats", fetchStatList);

    if (status === "loading") {
        return <span>Loading...</span>;
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }

    return (
        <>
            <StatView data={data}/>
        </>
    );
}
```



