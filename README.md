# Project Running Method (English)
<a href="https://master.d1khacogwix0ut.amplifyapp.com/" target="_blank">Example</a>
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
1. Build: `yarn build`
1. Run server `yarn start` and in new terminal run  `yarn run cypress` open Cypress and select a test:
2. To run all tests: `yarn run test` (the "test" script runs the server and Cypress concurrently)

## Layout
- [x] It should operate differently based on a screen width of 768px.
- [x] The header must be fixed at the top regardless of scrolling.
- [x] The content area should scroll vertically.
- [x] The selected menu should be highlighted in color.
- [x] The initial menu is the user list.
- [x] For screens with width less than or equal to 768px:
    - [x] A menu icon should appear in the header.
    - [x] When the menu icon is clicked, the menu should appear on the left of the screen, overlaying the content.
    - [x] The menu should disappear when you click outside the menu.

## User List
- [x] User data acquisition refers to the address displayed on the page.
- [x] The table header must be fixed at the top of the table.
- [x] The table should fill the height and width of the content.
- [x] Scrolling should not occur due to the table in the content.
- [x] When a mouse hovers over a row in the table, it should be highlighted in color.
- [x] When the last content of the table is exposed on the screen, a new user list should be added at the bottom.
- [x] There is no limit to the number of user lists.
- [x] When you press Add User, you should be able to add a new user through a dialog.
- [x] User information does not need to be stored separately on the server. It doesn't matter if the data is volatile.
- [x] The Add User dialog should work on top of all screens.
- [x] While there is a dialog, the entire screen should not scroll.
- [x] Required input must always be entered. If not entered, an error message should be printed below the input box.
- [x] If you click outside the dialog, the dialog ends and no value is added.
- [x] If there is no required input value, the Add button should be disabled.
- [x] When the Add button is clicked, user information should be added at the top of the table.
- [x] If you press the Cancel button, the dialog ends without adding a user.
- [x] After cancellation, if you click the Add User button again and output the dialog, a dialog with an empty value should be printed again.

## Image List
- [x] The acquisition of necessary images refers to the address displayed on the page.
- [x] Images should have a random size of width 100px, height 100px ~ 400px (in units of 100px).
- [x] Each image must be arranged in 3 rows without as much gap as possible.
- [x] Initially, more than 25 images should be loaded.
- [x] Before the bottom image appears, an additional 25 images should be loaded and placed on the screen.
- [x] There is no limit to the number of images that can be placed.

## Canvas
- [x] It must be implemented using HTML canvas.
- [x] You cannot use libraries that assist HTML canvas manipulation.
- [x] Draw 3 circles on the canvas.
- [x] Each circle must be draggable.
- [x] When multiple circles overlap, the circle closest to the position of the circle center and the mouse pointer is dragged.

# 프로젝트 구동 방법 (Korean)

<a href="https://codesandbox.io/p/github/aksovius/test-app/master?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljl72466000b3b6o8m4ibfhx%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljl72467000d3b6o744871bl%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B45.271855356101355%252C54.728144643898645%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljl72466000b3b6o8m4ibfhx%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljl72466000a3b6o595syqz3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cljl72466000b3b6o8m4ibfhx%2522%252C%2522activeTabId%2522%253A%2522cljl72466000a3b6o595syqz3%2522%257D%252C%2522cljl72467000d3b6o744871bl%2522%253A%257B%2522id%2522%253A%2522cljl72467000d3b6o744871bl%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522cljl745eo00b93b6oka2nj3ty%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522cljl74acl00fi3b6o08pnmn8c%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cljl74acl00fi3b6o08pnmn8c%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Example</a>

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
1. 빌드: `yarn build`
2. 서버 실행 `yarn start` 중에 Cypress를 열고 테스트를 선택하려면: `yarn run cypress`
3. 모든 테스트를 실행하려면: `yarn run test` ("test": "concurrently \"yarn start\" \"cypress run\"" 서버와 Cypress를 동시에 실행합니다.)

## 레이아웃
- [x] 화면 넓이 768px 기준으로 다른 레이아웃으로 동작해야 합니다.
- [x] 헤더는 스크롤 여부와 관계 없이 상단에 고정되어야 합니다.
- [x] 콘텐츠 영역은 상하로 스크롤 되어야 합니다.
- [x] 선택된 메뉴는 색상으로 강조되어야 합니다.
- [x] 초기 메뉴는 사용자 목록입니다.
- [x] 화면 넓이 768px 이하의 경우
    - [x] 헤더에 메뉴 아이콘이 나타나야 합니다.
    - [x] 메뉴 아이콘을 클릭하면 콘텐츠를 덮으면서 화면 왼쪽에 메뉴가 나타나야 합니다.
    - [x] 메뉴 이외의 영역을 클릭하면 메뉴가 사라져야 합니다.

## 사용자목록
- [x] 사용자 데이터 획득은 페이지에 표시된 주소를 참조합니다.
- [x] 테이블의 헤더는 테이블 상단에 고정되어야 합니다.
- [x] 테이블은 콘텐츠의 높이와 넓이를 채우는 크기를 가집니다.
- [x] 테이블로 인해 콘텐츠의 스크롤이 발생하면 안됩니다.
- [x] 테이블의 행에 마우스 오버 되면 색상으로 강조되어야 합니다.
- [x] 테이블의 마지막 내용이 화면에 노출되면 추가로 새로운 사용자 목록이 하단에 추가됩니다.
- [x] 사용자 목록의 수의 제한은 없습니다.
- [x] 사용자 추가를 누르면 다이얼로그를 통해 신규 사용자를 추가할 수 있어야 합니다.
- [x] 사용자 정보는 서버에 따로 저장될 필요는 없습니다. 휘발성 데이터여도 상관없습니다.
- [x] 사용자 추가 다이얼로그는 모든 화면 위에서 동작해야 합니다.
- [x] 다이얼로그가 있는 동안은 전체화면의 스크롤이 동작하면 안됩니다.
- [x] 필수 입력은 항상 입력되어야 합니다. 입력되지 않으면 에러 메시지가 입력창 하단에 출력되어야 합니다.
- [x] 다이얼로그 외의 영역을 클릭하면 다이얼로그가 종료되고 값이 추가되지 않습니다.
- [x] 추가 버튼은 필수 입력값이 없으면 Disable 상태여야 합니다.
- [x] 추가 버튼 클릭 시 테이블 최상단에 사용자 정보가 추가되어야 합니다.
- [x] 취소버튼을 누르는 경우 사용자 추가 없이 다이얼로그가 종료됩니다.
- [x] 취소 이후 다시 사용자 추가 버튼이 클릭되어 다이얼로그 출력되면 빈값으로 초기화된 다이얼로그가
다시 출력됩니다.

## 이미지목록
- [x] 필요한 이미지의 획득은 페이지에 표시된 주소를 참조합니다.
- [x] 이미지는 넓이 100px, 높이 100px ~ 400px(100px 단위) 의 랜덤한 크기를 가지게 됩니다.
- [x] 각이미지는최대한공백없이3개의행으로배치되어야합니다.
- [x] 이미지는 최초에 25장 이상 로딩되어야 합니다.
- [x] 최하단 이미지가 나타나기 전에 추가로 25장이 로딩되어 화면에 추가로 배치 되어야 합니다.
- [x] 배치할 수 있는 이미지의 수의 제한은 없습니다.

## 캔버스
- [x] HTML canvas를 사용하여 구현하여야 합니다.
- [x] HTML canvas 조작을 돕는 라이브러리를 사용할 수 없습니다.
- [x] 3개의 원을 canvas에 그립니다.
- [x] 각각의 원은 Drag가 가능해야합니다.
- [x] 여러 원이 겹치는 경우 원의 중심점과 마우스 포인터의 위치가 가장 가까운 원이 Drag 됩니다.