수업의 목표 = node.js application 만들기!
각각의 스텝마다 node.js의 기능을 배워야 해.
여기엔 JavaScript 지식 필요
JavaScript를 이미 알고 있다면 생략해도 ok

class 1 - node.js로 web server 만들기



class 2 - URL
html files ... 정해진 개수의 정적인 페이지들을 가져와
but clients에게 서로 다른 웹 페이지를 보내줄 수 있어야..

URL의 형식?
http://opentutorials.org:3000/main?id=HTML&page=12
http - protocol (web browser와 web server가 정보를 주고 받는 규칙)
opentutorials.org - host(domain), 인터넷에 연결된 특정 컴퓨터의 주소를 가리킴
:3000 - port (어떤 port와 연결된 서버와 통신할 것인가?)
main - path (그 컴퓨터 안에 있는 어떤 디렉토리의 어떤 파일인지를 가리킴)
id=HTML&page=12 - query string ... 해당 값을 변경하면 앞에 있는 web server에게 특정 정보를 보낼 수 있음 (what cleints want)

class 파일 읽기

정보를 다루는 핵심적 방법 4가지
C create
R read
U update
D delete

이번 시간... file을 어떻게 하면 node.js읽나?

