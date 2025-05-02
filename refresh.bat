@echo off
echo [INFO] 컨테이너 중지 중...
docker stop songtfolio-container

echo [INFO] 컨테이너 삭제 중...
docker rm songtfolio-container

echo [INFO] 이미지 다시 빌드 중...
docker build -t songtfolio .

echo [INFO] 컨테이너 재실행 중...
docker run -d -p 8080:80 --name songtfolio-container songtfolio

echo [DONE] 최신 버전이 반영되었습니다!
start http://localhost:8080