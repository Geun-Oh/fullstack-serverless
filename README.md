# fullstack-serverless
풀스택 서버리스 -네이더 다빗- 을 연습하는 repo입니다.

### 22.04.05

기본적인 amplify cli 설정 및 api 생성까지 마침.

### 22.04.06

제 4장 기본적인 components 작성 마침. 의존성 패키지 및 자잘한 에러 수정해야함!

### 22.04.07

제 4장에 대한 완전한 구현을 마침. @aws-amplify/ui-react 패키지는 다운그레이드 된 1.2.5 버전을 사용해야 함.
velog에 풀스택 서버리스에 대한 포스트 올림.

### 22.04.09

제 5장에 대한 components 작성중... 사용자 인증을 직접  구현하는 파트이다.

formState 변화에 직접적인 영향을 주는 components 작성 완료. updateForm 헬퍼 함수 작성해야함!

chapter6 Lambda Trigger를 추가하는 과정에서 계속 isAdmin을 통한 관리자 이메일 인증이 되지 않는 이슈가 발생함.
Lambda exports.handler에 대한 세부적인 공부를 진행한 뒤 exports.handler paramter로 전달되는 event에 대해 분석해보아야함...

### 22.04.10

제 6장에 대한 모든 작업을 마침. 사용자 인증 구현에서 Admin 계정을 이메일을 통해 분류하고 로그인 시 Admin 페이지가 추가적으로 로딩되도록 설정함.
Create account를 confirm했을 때 Lambda Trigger를 발생시켜 메일의 주소를 받고 만약 메일 주소가 Admin 배열에 포함된 주소면 사용자를 Admin 그룹에 포함시키도록 함.
또한 사진을 업로드할 때 1000픽셀 이상의 큰 파일의 경우 1000파일로 압축해서 저장되고 보여지도록 설정하는 컴포넌트를 생성함.
Amazom S3 Storage에 사진이 업로드되었을 때 Lambda Trigger를 발생시키도록 하여 사진의 크기를 재고 조정하는 로직이다.