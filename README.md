# 프로젝트 구동 방법 (Korean)

## 사전 요구사항
이 프로젝트를 실행하기 전에 다음이 설치되어 있는지 확인하십시오:
1. Node.js v13
2. Yarn 
3. Cypress

## 설치 및 빌드
1. 라이브러리 설치: `yarn install`
2. 빌드: `yarn build`
3. 시작: `yarn start`
4. 또는, 개발 서버를 실행할 수 있습니다: `yarn dev`

## Docker를 사용한 실행
Docker가 설치되어 있는 경우, 프로젝트는 Docker 파일을 사용하여 실행할 수 있습니다:
1. Docker 빌드: `docker build -t app .`
2. Docker 컨테이너 시작: `docker run -p 3000:3000 app`

## 테스트
1. Cypress를 열고 테스트를 선택하려면: `yarn run cypress`
2. 모든 테스트를 실행하려면: `yarn run test` ("test": "concurrently \"yarn start\" \"cypress run\"" 서버와 Cypress를 동시에 실행합니다. 하지만 이전에 빌드해야 합니다.)

# Project Running Method (English)

## Prerequisites
Before running this project, ensure the following are installed:
1. Node.js v13
2. Yarn 
3. Cypress

## Install and Build
1. Install Libraries: `yarn install`
2. Build: `yarn build`
3. Start: `yarn start`
4. Or, you can run the dev server: `yarn dev`

## Running with Docker
If Docker is installed, the project can be run using the Docker file:
1. Docker Build: `docker build -t app .`
2. Start Docker Container: `docker run -p 3000:3000 app`

## Testing
1. To open Cypress and select a test: `yarn run cypress`
2. To run all tests: `yarn run test` (the "test" script runs the server and Cypress concurrently, but you should build it before running.)

