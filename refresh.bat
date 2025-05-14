@echo off
echo [INFO] Container stopping...
docker stop songtfolio-container

echo [INFO] Container Deleting...
docker rm songtfolio-container

echo [INFO] Image rebuilding...
docker build -t songtfolio .

echo [INFO] Container restarting...
docker run -d -p 8080:80 --name songtfolio-container songtfolio

echo [DONE] Refresh!
start http://localhost:8080