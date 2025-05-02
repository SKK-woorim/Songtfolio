@echo off
echo Starting Songtfolio Docker container...
docker start songtfolio-container
start http://localhost:8080
